import type { SocialLabel } from "@/lib/constants"
import { cn } from "@/lib/utils"

const PATHS: Record<SocialLabel, React.ReactNode> = {
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  GitHub: (
    <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.6a5.1 5.1 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C5.7 1.1 4.6 1.4 4.6 1.4a4.8 4.8 0 0 0-.1 3.6A5.1 5.1 0 0 0 3 8.6c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.3V21" />
  ),
  Email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
}

export type SocialIconProps = {
  name: SocialLabel
  className?: string
}

export function SocialIcon({ name, className }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={cn("size-4", className)}
    >
      {PATHS[name]}
    </svg>
  )
}
