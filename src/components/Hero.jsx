import Container from './Container.jsx'

function Hero({ name, title, line }) {
  return (
    <header className="bg-ink py-16 md:py-24 lg:py-32">
      <Container>
        <h1 className="text-5xl font-bold text-surface md:text-6xl lg:text-7xl">{name}</h1>
        <p className="mt-4 text-xl font-normal text-surface md:text-2xl">{title}</p>
        <p className="mt-2 text-lg font-light text-surface-alt md:text-xl">{line}</p>
      </Container>
    </header>
  )
}

export default Hero
