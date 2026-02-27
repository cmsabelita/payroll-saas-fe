/** Design tokens. Generate CSS: npm run generate:theme */

export interface Palette {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  ring: string;
  input: string;
  inputForeground: string;
  destructive: string;
  destructiveForeground: string;
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
  info: string;
  infoForeground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  chart?: string[];
}

export interface ThemeTokens {
  palette: { light: Palette; dark: Palette };
  spacing: Record<string, string>;
  fontSize: Record<string, { size: string; lineHeight: string }>;
  fontWeight: Record<string, string>;
  letterSpacing: Record<string, string>;
  radius: Record<string, string>;
  fontFamily: Record<string, string>;
  shadow: Record<string, string>;
  animation: {
    duration: Record<string, string>;
    easing: Record<string, string>;
  };
  zIndex: Record<string, string>;
  borderWidth: Record<string, string>;
  ringWidth: Record<string, string>;
  ringOffset: Record<string, string>;
  blur: Record<string, string>;
  breakpoint: Record<string, string>;
}

export const themeConfig: ThemeTokens = {
  palette: {
    light: {
      background: "#F8F9FA",
      foreground: "#11181C",
      primary: "#3ECF8E",
      primaryForeground: "#FFFFFF",
      secondary: "#EBEFF2",
      secondaryForeground: "#11181C",
      muted: "#EBEFF2",
      mutedForeground: "#687076",
      accent: "#D1F5E3",
      accentForeground: "#065F46",
      border: "#D7DBDF",
      ring: "#3ECF8E",
      input: "#FFFFFF",
      inputForeground: "#11181C",
      destructive: "#E5484D",
      destructiveForeground: "#FFFFFF",
      success: "#3ECF8E",
      successForeground: "#FFFFFF",
      warning: "#F59E0B",
      warningForeground: "#78350F",
      info: "#0EA5E9",
      infoForeground: "#FFFFFF",
      card: "#FFFFFF",
      cardForeground: "#11181C",
      popover: "#FFFFFF",
      popoverForeground: "#11181C",
      chart: ["#3ECF8E", "#0EA5E9", "#F59E0B", "#E5484D", "#065F46"],
    },
    dark: {
      background: "#1C1C1C",
      foreground: "#EDEDED",
      primary: "#3ECF8E",
      primaryForeground: "#FFFFFF",
      secondary: "#2E2E2E",
      secondaryForeground: "#EDEDED",
      muted: "#2E2E2E",
      mutedForeground: "#9BA3AF",
      accent: "#1A2E26",
      accentForeground: "#3ECF8E",
      border: "#303030",
      ring: "#3ECF8E",
      input: "#181818",
      inputForeground: "#EDEDED",
      destructive: "#FF453A",
      destructiveForeground: "#FFFFFF",
      success: "#3ECF8E",
      successForeground: "#000000",
      warning: "#F59E0B",
      warningForeground: "#FEF3C7",
      info: "#0EA5E9",
      infoForeground: "#E0F2FE",
      card: "#232323",
      cardForeground: "#EDEDED",
      popover: "#232323",
      popoverForeground: "#EDEDED",
      chart: ["#3ECF8E", "#0EA5E9", "#F59E0B", "#FF453A", "#9BA3AF"],
    },
  },

  spacing: {
    0: "0",
    content: "1.3125rem",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
  },

  fontSize: {
    xs: { size: "0.75rem", lineHeight: "1rem" },
    sm: { size: "0.875rem", lineHeight: "1.25rem" },
    base: { size: "1rem", lineHeight: "1.5rem" },
    lg: { size: "1.125rem", lineHeight: "1.75rem" },
    xl: { size: "1.25rem", lineHeight: "1.75rem" },
    "2xl": { size: "1.5rem", lineHeight: "2rem" },
    "3xl": { size: "1.875rem", lineHeight: "2.25rem" },
    "4xl": { size: "2.25rem", lineHeight: "2.5rem" },
    "5xl": { size: "3rem", lineHeight: "1" },
    "6xl": { size: "3.75rem", lineHeight: "1" },
    "7xl": { size: "4.5rem", lineHeight: "1" },
    "8xl": { size: "6rem", lineHeight: "1" },
    "9xl": { size: "8rem", lineHeight: "1" },
  },

  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  radius: {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    panel: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  fontFamily: {
    sans: "var(--font-sans), Helvetica Neue, Helvetica, Arial, sans-serif",
    mono: "var(--font-mono), ui-monospace, monospace",
  },

  shadow: {
    none: "none",
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  },

  animation: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "500ms",
    },
    easing: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  zIndex: {
    auto: "auto",
    dropdown: "1000",
    sticky: "1020",
    fixed: "1030",
    "modal-backdrop": "1040",
    modal: "1050",
    popover: "1060",
    tooltip: "1070",
    toast: "1080",
    max: "9999",
  },

  borderWidth: {
    0: "0px",
    DEFAULT: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },

  ringWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
    DEFAULT: "2px",
  },

  ringOffset: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    DEFAULT: "2px",
  },

  blur: {
    none: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },

  breakpoint: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

function toVarName(prefix: string, key: string): string {
  const k = key === "DEFAULT" ? "DEFAULT" : key;
  const name = String(k).includes(".") ? String(k).replace(".", "-") : k;
  return `--${prefix}-${name}`;
}

function paletteToVars(palette: Palette): string[] {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(palette)) {
    if (key === "chart") continue;
    if (typeof value !== "string") continue;
    const varName =
      "--color-" +
      key
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "");
    lines.push(`  ${varName}: ${value};`);
  }
  return lines;
}

export function generateThemeCSS(): string {
  const lines: string[] = [
    "/* Generated from src/config/theme.ts – do not edit by hand */",
    "/* Run: npm run generate:theme */",
    "",
    ":root,",
    '[data-theme="light"] {',
    "  --background: " + themeConfig.palette.light.background + ";",
    "  --foreground: " + themeConfig.palette.light.foreground + ";",
    ...paletteToVars(themeConfig.palette.light),
    "  color-scheme: light;",
    "}",
    "",
    '[data-theme="dark"] {',
    "  --background: " + themeConfig.palette.dark.background + ";",
    "  --foreground: " + themeConfig.palette.dark.foreground + ";",
    ...paletteToVars(themeConfig.palette.dark),
    "  color-scheme: dark;",
    "}",
    "",
  ];

  const sections: Array<[string, Record<string, string>]> = [
    ["spacing", themeConfig.spacing],
    ["radius", themeConfig.radius],
    ["breakpoint", themeConfig.breakpoint],
    ["font-weight", themeConfig.fontWeight],
    ["shadow", themeConfig.shadow],
    ["z-index", themeConfig.zIndex],
    ["blur", themeConfig.blur],
    ["border-width", themeConfig.borderWidth],
    ["ring-width", themeConfig.ringWidth],
    ["ring-offset-width", themeConfig.ringOffset],
    ["animate-duration", themeConfig.animation.duration],
    ["animate-ease", themeConfig.animation.easing],
    ["tracking", themeConfig.letterSpacing],
  ];

  for (const [title, record] of sections) {
    const prefix = title.replace(/\s+/g, "-");
    lines.push(":root {");
    for (const [key, value] of Object.entries(record)) {
      const varName = toVarName(prefix, key);
      lines.push(`  ${varName}: ${value};`);
    }
    lines.push("}");
    lines.push("");
  }

  lines.push(":root {");
  for (const [key, value] of Object.entries(themeConfig.fontSize)) {
    const name = key.includes(".") ? key.replace(".", "-") : key;
    lines.push(`  --font-size-${name}: ${value.size};`);
    lines.push(`  --line-height-${name}: ${value.lineHeight};`);
  }
  lines.push("}");
  lines.push("");

  return lines.join("\n");
}
