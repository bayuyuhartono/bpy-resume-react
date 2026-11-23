export type LabelValue = {
  label: string
  value: string
}

/** Angka besar + keterangan. `accent` = bagian angka yang diwarnai accent (mis. "+", "→"). */
export type Stat = {
  value: string
  accent?: string
  label: string
}

export type NumberedItem = {
  title: string
  description: string
}

export type VenueShot = {
  image: string
  alt: string
  label: string
  caption: string
  /** Fokus crop gambar; default center. */
  position?: "top-left" | "center"
}

export type Project = {
  slug: string
  kind: "case-study" | "product"

  // Kartu di Home
  cardEyebrow: string
  cardTitle: string
  cardSummary: string
  /** Kartu lebar penuh di grid Work (desktop). */
  featured: boolean
  /** Tag pill (featured) / baris stack (kartu biasa). */
  tags: string[]
  /** Tag yang diberi warna accent, mis. "Product". */
  highlightTag?: string

  cover: string
  coverAlt: string
  /** Cover di halaman detail memakai rasio lebar 30:13 (default 30:17). */
  coverWide?: boolean

  // Halaman detail
  eyebrowName: string
  /** Baris judul halaman; tiap item = satu baris. */
  titleLines: string[]
  intro: string
  meta: LabelValue[]
  stats: [Stat, Stat, Stat]
  overview: {
    /** "The brief" (case study) atau "The problem" (produk). */
    label: string
    heading: string
    body: string
  }
  role: {
    heading: string
    body: string
  }
  features: {
    label: string
    heading: string
    items: NumberedItem[]
  }
  venue?: VenueShot[]
  resell?: {
    label: string
    heading: string
    items: NumberedItem[]
  }
  stack: LabelValue[]
  /** Judul pendek untuk link "Next project". */
  nextTitleLines: string[]
  ctaLabel: string
}

export type Experience = {
  company: string
  period: string
  current?: boolean
  role: string
  bullets: string[]
}

export type Education = {
  school: string
  program: string
  period: string
}
