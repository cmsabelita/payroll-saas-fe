/**
 * API and external service clients.
 * Keep frontend stateless; persistence and business logic live in the backend.
 */

export const api = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",

  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },

  async post<T, B = unknown>(path: string, body?: B): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
};
