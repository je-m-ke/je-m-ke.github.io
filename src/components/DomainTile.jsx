function DomainTile({ title, line }) {
  return (
    <article className="h-full bg-surface p-6">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-base font-normal text-ink">{line}</p>
    </article>
  )
}

export default DomainTile
