import Container from './Container.jsx'
import SkillRow from './SkillRow.jsx'

function Skills({ heading, levels, items }) {
  // Group by level, in the order the levels are listed.
  const rows = levels.flatMap((level) =>
    items.filter((item) => item.level === level.id).map((item) => ({ ...item, levelLabel: level.label })),
  )

  return (
    <section aria-labelledby="skills-heading" className="bg-surface py-12 md:py-16 lg:py-20">
      <Container>
        <h2 id="skills-heading" className="text-base font-bold text-brand md:text-lg">
          {heading}
        </h2>
        <ul className="mt-8 max-w-prose space-y-8">
          {rows.map((row) => (
            <SkillRow key={row.id} name={row.name} line={row.line} level={row.level} levelLabel={row.levelLabel} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Skills
