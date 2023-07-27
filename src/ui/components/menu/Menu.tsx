import { useEffect, useState } from 'react';
import IconMenuLine from '../../icons/IconMenu'
import  '../../styles/menu/Menu.css'

type props = {
  estadoMenu: () => void;
  darkMode: boolean;
}

const Menu = ({estadoMenu, darkMode}: props) => {
  const [ClassDarkMode, setIdDarkMode] = useState("menuLight");
  const [corTextos, setCorTextos] = useState("textosLight");
  const [corPort, setcorPort] = useState("portLight");

  useEffect(() => {
    if (darkMode) {
      setIdDarkMode("menuDark");
      setCorTextos("textosDark");
      setcorPort("portDark")
    } 
    else {
        setIdDarkMode("menuLight");
        setCorTextos("textosLight")
        setcorPort("portLight")
    }
  }, [darkMode]);


    return(
        <div id={`${ClassDarkMode}`}>
          <div className='conteudo1'>
            <div>
              <p className={`${corPort}`}>
                Port<span>fólio</span>
              </p>
            </div>
            <nav>
              <div><a href="#inicio" className={corTextos}>Início</a></div>
              <div><a href="#sobre" className={corTextos}>Sobre</a></div>
              <div><a href="#" className={corTextos}>Habilidades</a></div>
              <div><a href="#" className={corTextos}>Projetos</a></div>
            </nav>
            <div className='botaoMenu' onClick={estadoMenu}>
              <IconMenuLine width={43} height={43} color='#929292' id='tracos'/>
            </div>
          </div>
         
        </div>
    )
}

export default Menu