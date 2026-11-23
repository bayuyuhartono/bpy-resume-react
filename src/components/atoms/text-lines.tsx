import { Fragment } from "react"

export type TextLinesProps = {
  lines: string[]
  /** Kapan baris dipisah: selalu, atau hanya mulai breakpoint md (mobile mengalir biasa). */
  breakFrom?: "always" | "md"
}

export function TextLines({ lines, breakFrom = "md" }: TextLinesProps) {
  return lines.map((line, i) => (
    <Fragment key={`${i}-${line}`}>
      {i > 0 && (
        <>
          {" "}
          <br className={breakFrom === "md" ? "hidden md:inline" : undefined} />
        </>
      )}
      {line}
    </Fragment>
  ))
}
