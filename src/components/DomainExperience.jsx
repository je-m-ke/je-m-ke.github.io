import Container from './Container.jsx'
import DomainTile from './DomainTile.jsx'

function DomainExperience({ heading, lead, tiles }) {
  return (
    <section aria-labelledby="domain-experience-heading" className="bg-surface-alt py-12 md:py-16 lg:py-20">
      <Container>
        <h2 id="domain-experience-heading" className="text-base font-bold text-brand md:text-lg">
          {heading}
        </h2>
        <p className="mt-4 max-w-prose text-lg font-normal text-ink md:text-xl">{lead}</p>
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {tiles.map((tile) => (
            <li key={tile.id}>
              <DomainTile title={tile.title} line={tile.line} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default DomainExperience
