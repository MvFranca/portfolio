
import './App.css'
import Inicio from './ui/components/inicio/Inicio'
import Sobre from './ui/components/sobre/sobre'
import Habilidades from './ui/components/habilidades/Habilidades'
import Contato from './ui/components/contato/Contato'
import Menu from './ui/components/menu/Menu'
import Footer from './ui/components/footer/Footer'

function App() {

  return (
    <>
      <Menu/>
      <Inicio/>
      <Sobre/>
      <Habilidades/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
