import Inspect from "vite-plugin-inspect";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import handlebars from "vite-plugin-handlebars";
import { defineConfig } from "vite";
import { resolve } from "path";
import viteImagemin from "vite-plugin-imagemin";
import imageminWebp from "imagemin-webp";

export default defineConfig({
  base: "./",
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      webp: imageminWebp({
        quality: 75,
      }),
    }),
    Inspect(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },

      png: {
        quality: 100,
      },
    }),
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/html/components"),
        resolve(__dirname, "src/html/pages/main"),
        resolve(__dirname, "src/html/modules"),
        resolve(__dirname, "src/html/pages/search-result"),
        resolve(__dirname, "src/html/pages/hot-offers"),
        resolve(__dirname, "src/html/pages/hotel-card/"),
      ]
    }),
  ],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "/index.html"),
        search: resolve(__dirname, "/src/pages/search-result/search-result.html"),
        hotOffers: resolve(__dirname, "/src/pages/hot-offers/hot-offers.html"),
        card: resolve(__dirname, "/src/pages/hotel-card/hotel-card.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
