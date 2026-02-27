import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { generateThemeCSS } from "../src/config/theme";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, "../src/app/theme-variables.css");

writeFileSync(outPath, generateThemeCSS(), "utf-8");
console.log("Generated:", outPath);
