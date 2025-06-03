import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
		environment: "node",
		environmentOptions: {
			jsdom: {
				// Browser environment for JSX/TSX files
				include: ["**/*.{jsx,tsx}"],
			},
			node: {
				// Node environment for regular JS/TS files
				include: ["**/*.{js,ts}"],
			},
		},
	},
});
