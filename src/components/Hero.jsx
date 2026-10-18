import Container from './Container.jsx'

function Hero({ name, title, line }) {
  return (
    <header className="bg-ink py-16 md:py-24 lg:py-32">
      <Container className="md:grid md:grid-cols-3 md:gap-12">
        <div className="md:col-span-2">
          <h1 className="text-5xl font-bold text-surface md:text-6xl lg:text-7xl">{name}</h1>
          <p className="mt-4 text-xl font-normal text-surface md:text-2xl">{title}</p>
          <p className="mt-2 text-lg font-light text-surface-alt md:text-xl">{line}</p>
        </div>
        {/* Decorative only. Bright red is allowed on black as a large shape. */}
        <div aria-hidden="true" className="mt-12 h-16 bg-brand-bright md:mt-0 md:h-auto" />
      </Container>
    </header>
  )
}

export default Hero
