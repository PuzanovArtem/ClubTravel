import Inspect from 'vite-plugin-inspect'
import handlebars from 'vite-plugin-handlebars'
import imageminWebp from 'imagemin-webp'
import path from 'path'
import viteImagemin from 'vite-plugin-imagemin'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  base: './',
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
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
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
    commonjs(),
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'src/html/components'),
        resolve(__dirname, 'src/html/modules'),
        resolve(__dirname, 'src/html/pages/main'),
        resolve(__dirname, 'src/html/modules'),
        resolve(__dirname, 'src/html/pages/search-result'),
        resolve(__dirname, 'src/html/pages/hot-offers'),
        resolve(__dirname, 'src/html/pages/hotel-card/'),
        resolve(__dirname, 'src/html/pages/company/'),
        resolve(__dirname, 'src/html/pages/directions-tour/'),
        resolve(__dirname, 'src/html/pages/user-account/'),
        resolve(__dirname, 'src/html/pages/contacts/'),
        resolve(__dirname, 'src/html/pages/authorization/'),
        resolve(__dirname, 'src/html/pages/registration/'),
        resolve(__dirname, 'src/html/pages/forgot-password'),
        resolve(__dirname, 'src/html/pages/text__page'),
        resolve(__dirname, 'src/html/pages/errorPage'),
        resolve(__dirname, 'src/html/pages/tour-request'),
      ],
    }),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        search: resolve(__dirname, 'src/pages/search-result/search-result.html'),
        card: resolve(__dirname, 'src/pages/hotel-card/hotel-card.html'),
        directions: resolve(__dirname, 'src/pages/directions-tour/directions-tour.html'),
        hotOffers: resolve(__dirname, 'src/pages/hot-offers/hot-offers.html'),
        company: resolve(__dirname, 'src/pages/company/company.html'),
        account: resolve(__dirname, 'src/pages/user-account/user-account.html'),
        contacts: resolve(__dirname, 'src/pages/contacts/contacts.html'),
        authorization: resolve(__dirname, 'src/pages/authorization/authorization.html'),
        registration: resolve(__dirname, 'src/pages/registration/registration.html'),
        forgotPassword: resolve(__dirname, 'src/pages/forgot-password/forgot-password.html'),
        textPage: resolve(__dirname, 'src/pages/text__page/text__page.html'),
        errorPage: resolve(__dirname, 'src/pages/errorPage/errorPage.html'),
        tourRequest: resolve(__dirname, 'src/pages/tour-request/tour-request.html'),
      },
    },
    commonjsOptions: {
      include: /node_modules/,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['some-dependency'],
  },
})
