import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isReplit = process.env.REPL_ID !== undefined;
const port = Number(process.env.PORT || 5173);
const basePath = process.env.BASE_PATH || "/";

export default defineConfig(async () => {
  // Only load Replit-specific plugins when running inside Replit
  const replitPlugins: import("vite").Plugin[] = [];
  if (isReplit) {
    const runtimeErrorOverlay = await import(
      "@replit/vite-plugin-runtime-error-modal"
    ).then((m) => m.default());
    replitPlugins.push(runtimeErrorOverlay);

    if (process.env.NODE_ENV !== "production") {
      const cartographer = await import(
        "@replit/vite-plugin-cartographer"
      ).then((m) =>
        m.cartographer({
          root: path.resolve(import.meta.dirname, ".."),
        }),
      );
      const devBanner = await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner(),
      );
      replitPlugins.push(cartographer, devBanner);
    }
  }

  return {
    base: basePath,
    plugins: [react(), tailwindcss({ optimize: false }), ...replitPlugins],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(
          import.meta.dirname,
          "..",
          "..",
          "attached_assets",
        ),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
