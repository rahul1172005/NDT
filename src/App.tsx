
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Services from './components/home/Services'
import Cooperation from './components/home/Cooperation'
import Equipment from './components/home/Equipment'
import Projects from './components/home/Projects'
import Geography from './components/home/Geography'
import Blog from './components/home/Blog'
import Contact from './components/home/Contact'
import './styles/global.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Cooperation />
        <Equipment />
        <Projects />
        <Geography />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
