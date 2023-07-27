/* eslint-disable react-hooks/exhaustive-deps */
import {  useState, useEffect,} from 'react';
import '../../styles/menu/MenuMobile.css'


type props = {
  stateMenu: boolean;
  darkMode: boolean;
}

const MenuMobile = ({stateMenu, darkMode}: props) => {

    const [darkMenu, setDarkMenu] = useState("lightMenuMobile")

    useEffect(() => {
        if(!darkMode) setDarkMenu("lightMenuMobile")
        else setDarkMenu("darkMenuMobile")
    }, [darkMode])

  if(!stateMenu) return

  return (
    <header className={`${darkMenu}`}>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#">Habilidades</a>
        <a href="#">Projetos</a>
      </nav>
    </header>
  );
};

export default MenuMobile;
