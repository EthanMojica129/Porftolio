import './App.css'
import { NavBar } from './components/NavBar'
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import {Lenguages} from './components/Lenguages'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'


function App() {


  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Lenguages />
      <Projects />
      <Footer />
    </>
  )
}

export default App
