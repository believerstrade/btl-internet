import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const QUANTA_ICONS_SHIM = fileURLToPath(new URL("./src/lib/quanta-icons.ts", import.meta.url));

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: [{ find: /^@higgsfield-ai\/icons(\/.*)?$/, replacement: QUANTA_ICONS_SHIM }],
  },
  plugins: [
    svgr({ svgrOptions: { icon: true, svgProps: { fill: "currentColor" }, svgoConfig: { plugins: [{ name: "preset-default", params: { overrides: { removeViewBox: false } } }] } } }),
    tanstackStart(),
    nitro(),
    react(),
    tailwindcss(),
  ],
});
