import './scss/App.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import MainPage from './pages/MainPage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact';


function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App
