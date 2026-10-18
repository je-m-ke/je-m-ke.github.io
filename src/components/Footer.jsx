import Container from './Container.jsx'

function Footer({ text }) {
  return (
    <footer className="bg-ink py-12 md:py-16">
      <Container>
        <p className="text-base font-normal text-surface md:text-lg">{text}</p>
      </Container>
    </footer>
  )
}

export default Footer
