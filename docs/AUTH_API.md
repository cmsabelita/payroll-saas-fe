# Auth API Reference

Backend auth module: `src/http/auth/` — three sub-modules covering **app-level PKCE**, **password/email**, and **SSO OAuth**.

All endpoints are rate-limited under the `auth` throttle bucket.

---

## Base URL

```
/auth
```

---

## 1. App Token (PKCE) — `POST /auth/app-token` & `POST /auth/exchange-app-token`

Used by mobile/native clients to obtain a short-lived app-level access token via PKCE before any user authentication.

### Allowed client IDs

```
payroll-saas-app
payroll-saas-ios-app
payroll-saas-android-app
```

---

### `POST /auth/app-token`

Request an authorization code. The client generates a PKCE pair first.

**Request body**

```ts
{
  clientId: string            // e.g. "payroll-saas-ios-app"
  deviceId: string            // unique device identifier, e.g. "ios_abc123-def456"
  codeChallenge: string       // SHA-256(codeVerifier), base64url-encoded
  codeChallengeMethod: "S256"
  grantType: "client_credentials"
}
```

**Response `201`**

```ts
{
  authCode: string   // JWT auth code — expires in 5 minutes
}
```

**Error responses**

| Status | Meaning |
|--------|---------|
| 400 | Bad request / missing fields |
| 401 | Invalid clientId or unsupported PKCE method |
| 429 | Rate limit exceeded |

---

### `POST /auth/exchange-app-token`

Exchange the authorization code for an access token by proving knowledge of the original `codeVerifier`.

**Request body**

```ts
{
  authCode: string      // from /auth/app-token
  codeVerifier: string  // original random string used to derive codeChallenge
  clientId: string
  deviceId: string
}
```

**Response `201`**

```ts
{
  accessToken: string   // JWT — expires in 1 hour
  expiresIn: number     // seconds, e.g. 3600
  tokenType: "Bearer"
}
```

**Error responses**

| Status | Meaning |
|--------|---------|
| 401 | Invalid/expired auth code, or PKCE verification failed |
| 429 | Rate limit exceeded |

---

### PKCE flow (frontend implementation guide)

```
1. Generate random codeVerifier  (43–128 chars, URL-safe)
2. codeChallenge = base64url(sha256(codeVerifier))
3. POST /auth/app-token  → { authCode }
4. POST /auth/exchange-app-token  → { accessToken }
5. Store accessToken securely; use as Bearer token for all subsequent requests
```

---

## 2. Password Auth — `POST /auth/password/*`

Standard email + password authentication with JWT access/refresh token pairs.

**Token lifetimes**

| Token | Lifetime |
|-------|----------|
| Access token | 1 hour |
| Refresh token | 7 days |

---

### `POST /auth/password/register`

Create a new account.

**Request body**

```ts
{
  email: string      // valid email
  password: string   // min 8 chars, must contain uppercase, lowercase, number, special char
  name: string       // full name
  picture?: string   // optional avatar URL
}
```

**Response `201`** — `AuthResponse`

```ts
{
  user: {
    id: string
    email: string
    name: string
    picture?: string
    emailVerified: boolean      // false on initial registration
    mustChangePassword?: boolean
  },
  tokens: {
    accessToken: string
    refreshToken: string
    expiresIn: number           // seconds
    tokenType: "Bearer"
  }
}
```

**Error responses**

| Status | Meaning |
|--------|---------|
| 400 | Invalid input or weak password |
| 409 | Email already registered |
| 429 | Rate limit exceeded |

---

### `POST /auth/password/login`

Login with email and password.

**Request body**

```ts
{
  email: string
  password: string
}
```

**Response `200`** — `AuthResponse` (same shape as register)

**Error responses**

| Status | Meaning |
|--------|---------|
| 401 | Invalid credentials or account locked |
| 429 | Rate limit exceeded |

---

### `POST /auth/password/reset-request`

Send a password reset link to the user's email. Always returns 200 even if the email doesn't exist (security: no user enumeration).

**Request body**

```ts
{
  email: string
}
```

**Response `200`**

```ts
{
  message: string
  resetToken?: string   // only present in dev/test environments
}
```

---

### `POST /auth/password/reset`

Reset password using the token from the reset email.

**Request body**

```ts
{
  token: string       // from reset email link
  newPassword: string // min 8 chars + complexity requirements
}
```

**Response `200`**

```ts
{
  message: string
}
```

**Error responses**

| Status | Meaning |
|--------|---------|
| 400 | Invalid/expired token, or weak password |

---

### `PUT /auth/password/change`

Change password for an authenticated user. Requires Bearer token.

**Headers**

```
Authorization: Bearer <accessToken>
```

**Request body**

```ts
{
  currentPassword: string
  newPassword: string     // min 8 chars + complexity requirements
}
```

**Response `200`**

```ts
{
  message: string
}
```

**Error responses**

| Status | Meaning |
|--------|---------|
| 401 | Wrong current password, or not authenticated |

---

### `POST /auth/password/verify-email`

Verify email address with the token received via email.

**Request body**

```ts
{
  token: string
}
```

**Response `200`**

```ts
{
  message: string
  emailVerified: boolean   // true on success
}
```

---

### `POST /auth/password/resend-verification`

Resend the email verification link. No-ops silently if already verified.

**Request body**

```ts
{
  email: string
}
```

**Response `200`**

```ts
{
  message: string
  emailVerified: boolean
}
```

---

### `POST /auth/password/sessions/refresh`

Rotate access and refresh tokens using a valid refresh token.

**Request body**

```ts
{
  refreshToken: string
}
```

**Response `200`**

```ts
{
  tokens: {
    accessToken: string
    refreshToken: string
    expiresIn: number
    tokenType: "Bearer"
  }
}
```

**Error responses**

| Status | Meaning |
|--------|---------|
| 401 | Invalid or expired refresh token |

---

### `DELETE /auth/password/sessions`

Logout — invalidates the refresh token server-side. The client should also discard both tokens locally.

**Request body**

```ts
{
  refreshToken: string
}
```

**Response `200`**

```ts
{
  message: "Logged out successfully"
}
```

---

## 3. SSO / OAuth — `GET|POST|DELETE /auth/*`

OAuth 2.0 social login supporting Google, Facebook, and Apple.

**Supported providers**

```
google | facebook | apple
```

---

### `POST /auth/url`

Get the OAuth authorization URL to redirect the user to. Use this for SPA/mobile flows where you control the redirect.

**Request body**

```ts
{
  provider: "google" | "facebook" | "apple"
  redirectUrl?: string   // your app's callback URL (e.g. deep link for mobile)
  state?: string         // optional CSRF token
}
```

**Response `201`**

```ts
{
  authUrl: string    // redirect the user here
  state?: string     // echo of your state param
  provider: string
}
```

---

### `GET /auth/:provider`

Browser-redirect initiation. Navigating to this URL redirects directly to the provider's login page.

**Path params**

| Param | Values |
|-------|--------|
| `provider` | `google` \| `facebook` \| `apple` |

**Query params**

| Param | Required | Description |
|-------|----------|-------------|
| `state` | No | CSRF token or app deep-link URI |
| `redirectUrl` | No | Custom callback URL |

**Response**: `302` redirect to provider

---

### `GET /auth/:provider/callback`

OAuth callback handler. The provider redirects here after user consent.

- If `state` is present, the server treats it as the app's deep-link URI and redirects with tokens as query params
- If `state` is absent, returns JSON

**Query params (set by provider)**

| Param | Required |
|-------|----------|
| `code` | Yes |
| `state` | No |

**Response when `state` absent — `200`** (JSON)

```ts
{
  user: {
    id: string
    email: string
    name: string
    picture?: string
    provider: "google" | "facebook" | "apple"
  },
  tokens: {
    accessToken: string
    refreshToken: string
    expiresIn: number
    tokenType: "Bearer"
  },
  provider: string
}
```

**Response when `state` present** — `302` redirect to `{state}?accessToken=...&refreshToken=...&userId=...&email=...&name=...&picture=...&provider=...`

> **Mobile deep-link flow**: pass your app URI (e.g. `myapp://auth/callback`) as `state`. After OAuth, the server redirects back to your app with all tokens as query params.

---

### `POST /auth/sessions`

Exchange an OAuth code for tokens programmatically (no redirect). Use this when your app handles the OAuth redirect itself and has the code.

**Request body**

```ts
{
  provider: "google" | "facebook" | "apple"
  code: string      // from OAuth provider
  state?: string
}
```

**Response `201`** — same `SsoLoginResponse` shape as the callback JSON above

---

### `POST /auth/sessions/refresh`

Refresh SSO tokens.

**Request body**

```ts
{
  provider: "google" | "facebook" | "apple"
  refreshToken: string
}
```

**Response `201`**

```ts
{
  accessToken: string
  refreshToken: string
  expiresIn: number
  tokenType: "Bearer"
}
```

---

### `DELETE /auth/sessions`

Revoke an SSO session.

**Request body**

```ts
{
  provider: "google" | "facebook" | "apple"
  userId: string
  refreshToken: string
}
```

**Response `200`** — empty body

---

## Token Usage

All protected endpoints require:

```
Authorization: Bearer <accessToken>
```

The access token is a signed JWT. Store it in memory (not localStorage) where possible. Use the refresh endpoint to silently obtain a new pair when the access token expires.

---

## Rate Limiting

All auth endpoints are under the `auth` throttle bucket. Exceeding the limit returns `429 Too Many Requests`. Implement exponential back-off on 429 responses.

---

## Password Requirements

- Minimum 8 characters
- Must contain: uppercase letter, lowercase letter, number, special character

---

## Auth Flows Summary

```
Password login:
  POST /auth/password/login → { user, tokens }

SSO (web SPA):
  POST /auth/url → { authUrl }  →  redirect user  →  GET /auth/:provider/callback → JSON

SSO (mobile deep link):
  GET /auth/:provider?state=myapp%3A%2F%2Fcallback  →  user logs in  →  302 to myapp://callback?accessToken=...

SSO (mobile programmatic):
  App handles OAuth itself → POST /auth/sessions → { user, tokens }

App-level token (mobile):
  Generate PKCE pair  →  POST /auth/app-token  →  POST /auth/exchange-app-token  →  { accessToken }

Token refresh:
  POST /auth/password/sessions/refresh  (password flow)
  POST /auth/sessions/refresh           (SSO flow)

Logout:
  DELETE /auth/password/sessions  (password flow)
  DELETE /auth/sessions           (SSO flow)
```
