import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import type { Plugin } from "vite"
import { defineConfig } from "vitest/config"
import { GOOGLE_SITE_VERIFICATION, GTM_ID } from "./src/lib/constants.ts"

/**
 * Sisipkan snippet Google Tag Manager ke index.html, hanya saat build (bukan dev server).
 * scripts/prerender.mjs memakai dist/index.html sebagai template, jadi semua halaman ikut ter-tag.
 */
function googleTagManager(id: string): Plugin {
  return {
    name: "google-tag-manager",
    apply: "build",
    transformIndexHtml() {
      return [
        {
          tag: "script",
          injectTo: "head-prepend",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`,
        },
        {
          tag: "noscript",
          injectTo: "body-prepend",
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ]
    },
  }
}

/** Meta verifikasi Google Search Console, disisipkan ke index.html saat build. */
function googleSiteVerification(token: string): Plugin {
  return {
    name: "google-site-verification",
    apply: "build",
    transformIndexHtml() {
      return [
        {
          tag: "meta",
          injectTo: "head",
          attrs: { name: "google-site-verification", content: token },
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    googleTagManager(GTM_ID),
    googleSiteVerification(GOOGLE_SITE_VERIFICATION),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: false,
  },
})
