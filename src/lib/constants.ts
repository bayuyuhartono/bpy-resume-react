/**
 * Nilai yang dipakai berulang di banyak tempat.
 *
 * Warna: styling komponen tetap lewat token Tailwind (bg-primary, text-primary-text, …)
 * yang didefinisikan di src/index.css. BRAND_COLORS di sini adalah cerminan hex-nya untuk
 * kebutuhan di sisi JS (meta theme-color, canvas, dsb). Kalau mengubah warna, ubah keduanya.
 */
export const BRAND_COLORS = {
  background: "#040505",
  card: "#0D0F0E",
  foreground: "#F1F1EF",
  subtleForeground: "#C3C6C3",
  mutedForeground: "#9B9E9C",
  faintForeground: "#7C817C",
  border: "#1C1F1D",
  input: "#3F433E",
  primary: "#034694",
  primaryText: "#5B8FD6",
} as const

export const SITE = {
  name: "Bayu Yuhartono",
  shortName: "Bayu",
  role: "Software Engineer",
  tagline: "Software Engineer — Mobile · Web · Backend",
  title: "Bayu Yuhartono – Software Engineer",
  location: "Jakarta, Indonesia",
  availability: "open to remote & relocation",
  email: "bayuyuhartono@gmail.com",
  cvPath: "/cv.pdf",
  copyrightYear: 2026,
  /**
   * Domain produksi, tanpa garis miring di akhir. Dipakai untuk canonical, Open Graph,
   * sitemap.xml dan robots.txt. TODO: ganti dengan domain final.
   */
  url: "https://bayuyuhartono.com",
  description:
    "Bayu Yuhartono — software engineer building mobile, web and backend systems. Founder of Pesoros Dev, based in Jakarta.",
  locale: "en_US",
  /** Gambar Open Graph default (1200×630) di folder public/. */
  ogImage: {
    path: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Bayu Yuhartono – Software Engineer",
  },
  /** Organisasi saat ini untuk data terstruktur (JSON-LD). */
  worksFor: "Pesoros Dev",
} as const

/**
 * Container Google Tag Manager. Disisipkan ke index.html hanya saat build produksi
 * (plugin di vite.config.ts), jadi trafik `npm run dev` tidak ikut terhitung.
 */
export const GTM_ID = "GTM-WSNX3KL9"

/** Token verifikasi Google Search Console (metode HTML tag). Publik, aman di-commit. */
export const GOOGLE_SITE_VERIFICATION = "jyqR4tJZyY92h9PDqtscB2YtIVOu1bzgK5-AQnVWVo4"

/** Pemisah antar item di pita marquee (gaya akhir statement kode). */
export const MARQUEE_SEPARATOR = ";"

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bayuyuhartono" },
  { label: "GitHub", href: "https://github.com/bayuyuhartono" },
  { label: "Email", href: `mailto:${SITE.email}` },
] as const

export type SocialLabel = (typeof SOCIAL_LINKS)[number]["label"]

/** Anchor section di Home. */
export const SECTION_IDS = {
  top: "top",
  about: "about",
  work: "work",
  experience: "experience",
  contact: "contact",
} as const

export const ROUTES = {
  home: "/",
  project: (slug: string) => `/work/${slug}`,
  section: (id: string) => `/#${id}`,
} as const

/** Nav utama. `detail: false` = tidak tampil di header halaman detail (sesuai design). */
export const NAV_ITEMS = [
  { label: "Home", sectionId: SECTION_IDS.top, detail: true },
  { label: "About me", sectionId: SECTION_IDS.about, detail: false },
  { label: "Work", sectionId: SECTION_IDS.work, detail: true },
  { label: "Experience", sectionId: SECTION_IDS.experience, detail: true },
  { label: "Contact", sectionId: SECTION_IDS.contact, detail: true },
] as const

export const PROJECT_TYPE_OPTIONS = [
  "Full-time role",
  "Freelance project",
  "Mobile app",
  "Web platform",
] as const

export const TIMELINE_OPTIONS = ["As soon as possible", "1–3 months", "Flexible"] as const
