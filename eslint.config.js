import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	js.configs.recommended,
	tseslint.configs.recommended,
	{
		plugins: {
			prettier: prettier,
		},
		rules: {
			"prettier/prettier": "off",
		},
	},

	astro.configs.recommended,
	{
		plugins: {
			"jsx-a11y": jsxA11y,
		},
		rules: jsxA11y.configs.recommended.rules,
	},
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
				project: "./tsconfig.json",
			},
		},
		rules: {
			"no-undef": "off",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},

	{
		ignores: ["dist/**", "**/*.d.ts", ".github/", ".vscode/**", "package-lock.json"],
	},
]);
