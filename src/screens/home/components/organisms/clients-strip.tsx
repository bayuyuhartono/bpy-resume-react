export type ClientsStripProps = {
  clients: string[]
}

export function ClientsStrip({ clients }: ClientsStripProps) {
  return (
    <section aria-label="Clients" className="border-b">
      <div className="container-page py-8 md:py-14">
        <ul className="bg-border grid grid-cols-2 gap-px border md:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          {clients.map((client) => (
            <li
              key={client}
              className="bg-background flex items-center justify-center gap-2 px-2.5 py-4.5 text-sm font-bold last:odd:col-span-2 md:gap-2.5 md:px-4 md:py-6.5 md:text-[17px] md:last:odd:col-span-1"
            >
              <span aria-hidden="true" className="bg-primary size-2 rotate-45 md:size-2.5" />
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
