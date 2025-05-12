import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/*const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];*/

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignorePatterns: ["node_modules/**/*", ".next/**/*", "*.d.ts"],
    rules: {
      // Optional: You can disable specific rules that are causing problems
      "@typescript-eslint/no-unused-vars": ["error", {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }],
      "@typescript-eslint/no-require-imports": "warn" // Downgrade to warning if needed
    }
  }
];

export default eslintConfig;
