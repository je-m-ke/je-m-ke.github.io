import CurrentRole from './components/CurrentRole.jsx'
import DomainExperience from './components/DomainExperience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import { profile } from './data/profile.js'

function App() {
  return (
    <>
      <Hero {...profile.hero} />
      <main>
        <CurrentRole {...profile.role} />
        <DomainExperience {...profile.domains} />
        <Skills {...profile.skills} />
      </main>
      <Footer {...profile.footer} />
    </>
  )
}

export default App
