import { Header } from "./components/Header"
import { Intro } from "./components/sections/introducao"
import { Footer } from "./components/footer"
import { About } from "./components/sections/abaout"
import { Techs } from "./components/sections/tecnologias"
import { Projetos } from "./components/sections/projetos"
import './styles/index.css'


function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Techs/>
      <Projetos/>
      <Footer/>
    </>
  )
}

export default App
