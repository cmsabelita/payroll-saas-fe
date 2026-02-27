export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "",
} as const;

export { themeConfig, generateThemeCSS } from "./theme";
export type { ThemeTokens, Palette } from "./theme";
