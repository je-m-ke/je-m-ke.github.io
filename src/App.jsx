import CurrentRole from './components/CurrentRole.jsx'
import Hero from './components/Hero.jsx'
import { profile } from './data/profile.js'

function App() {
  return (
    <>
      <Hero {...profile.hero} />
      <main>
        <CurrentRole {...profile.role} />
      </main>
    </>
  )
}

export default App
