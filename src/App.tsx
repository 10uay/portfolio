import './App.css'

import Hero from './MyComponents/Hero'
import { Navbar } from './MyComponents/Navbar'
import { Knowledage } from "./MyComponents/Knowledage"
import { Projects } from './MyComponents/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Knowledage />
    </>
  )
}

export default App
