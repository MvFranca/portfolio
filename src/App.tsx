
import './App.css'
import Contato from './ui/components/contato/Contato'
import Menu from './ui/components/menu/Menu'
import Footer from './ui/components/footer/Footer'
import MenuMobile from './ui/components/menu/MenuMobile'
import {useState} from 'react'
import Inicio2 from './ui/components/inicio/Inicio2'
import Sobre2 from './ui/components/sobre/Sobre2'
import SideBar from './ui/components/menu/SideBar'
import Projetos from './ui/components/projetos/Projetos'

function App() {
  const [stateMenu, setStateMenu] = useState(false)
  const[stateDarkMode, setStateDarkMode] = useState(false)

  function estadoMenu(){
    setStateMenu(!stateMenu)
  }

  function alterarCores(){
    setStateDarkMode(!stateDarkMode)
  }
  
  return (
    <>
      <MenuMobile
       stateMenu = {stateMenu}
       />
      <Menu
      estadoMenu = {estadoMenu}
      />
      <SideBar
      alterarCores={alterarCores}
      />
      <Inicio2
      />
      <Sobre2/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
