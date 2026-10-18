import Container from './Container.jsx'

function CurrentRole({ heading, body }) {
  return (
    <section aria-labelledby="current-role-heading" className="bg-surface py-12 md:py-16 lg:py-20">
      <Container>
        <h2 id="current-role-heading" className="text-base font-bold text-brand md:text-lg">
          {heading}
        </h2>
        <p className="mt-4 max-w-prose text-lg font-normal text-ink md:text-xl">{body}</p>
      </Container>
    </section>
  )
}

export default CurrentRole
