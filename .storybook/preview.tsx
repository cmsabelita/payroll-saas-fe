import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider } from "next-themes";
import React from "react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    /** Align canvas with our theme: light Slate 50, dark Midnight */
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "App theme (matches payroll design system)",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "system", title: "System", icon: "browser" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals?.theme ?? "light";
      const forcedTheme = theme === "system" ? undefined : theme;
      return (
        <ThemeProvider
          attribute="data-theme"
          defaultTheme={theme}
          forcedTheme={forcedTheme}
          enableSystem={theme === "system"}
        >
          <div
            style={{
              padding: "0.5rem",
              background: "var(--background)",
              color: "var(--foreground)",
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
