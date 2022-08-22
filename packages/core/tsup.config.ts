import { defineConfig } from "tsup";

export default defineConfig({
	format: ["esm", "cjs", "iife"],
	entry: {
		index: "src/index.ts",
	},
	splitting: false,
	treeshake: true,
	sourcemap: true,
	dts: true,
	banner(ctx) {
		if (ctx.format === "esm") {
			return {
				js: `import { createRequire } from 'module';const require = createRequire(process.cwd());`,
			};
		}
		return { js: "" };
	},
});
