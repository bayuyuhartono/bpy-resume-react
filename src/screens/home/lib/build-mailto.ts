import { SITE } from "@/lib/constants"
import type { ContactFormValues } from "../schemas/contact-schema"

/** Susun link mailto: berisi isi form, untuk dibuka di aplikasi email pengunjung. */
export function buildMailto(values: ContactFormValues, to: string = SITE.email) {
  const subject = `${values.projectType} — ${values.name}`
  const body = [
    values.message,
    "",
    "—",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Project type: ${values.projectType}`,
    values.timeline ? `Timeline: ${values.timeline}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n")

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
