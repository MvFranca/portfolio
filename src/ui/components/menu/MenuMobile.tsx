/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../../styles/menu/MenuMobile.css";

type props = {
  stateMenu: boolean;
  darkMode: boolean;
  exitMenu: () => void;
};

const MenuMobile = ({ stateMenu, darkMode, exitMenu }: props) => {
  const [darkMenu, setDarkMenu] = useState("lightMenuMobile");

  useEffect(() => {
    if (!darkMode) setDarkMenu("lightMenuMobile");
    else setDarkMenu("darkMenuMobile");
  }, [darkMode]);

  if (!stateMenu) return;

  return (
    <header className={`${darkMenu}`}>
      <nav>
        <a
          href="#infoMenu"
          onClick={() => {
            exitMenu();
          }}
        >
          Início
        </a>
        <a
          href="#sobreMenu"
          onClick={() => {
            exitMenu();
          }}
        >
          Sobre
        </a>
        <a
          href="#projetosMenu"
          onClick={() => {
            exitMenu();
          }}
        >
          Projetos
        </a>
        <a
          href="#contatoMenu"
          onClick={() => {
            exitMenu();
          }}
        >
          Contato
        </a>
      </nav>
    </header>
  );
};

export default MenuMobile;
