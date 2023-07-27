/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { useEffect, useState } from "react";
import "../../styles/projetos/Projetos.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Projeto from "../projetos/Projeto";

type props = {
    darkMode: boolean;
}

const Projetos = ({darkMode}: props) => {

    const [ClassDarkMode, setIdDarkMode] = useState("lightProjects");
    const [corTextos, setCorTextos] = useState("textosLight");
  
    useEffect(() => {
      if (darkMode) {
        setIdDarkMode("darkProjects");
        setCorTextos("textosDark");
      } 
      else {
          setIdDarkMode("lightProjects");
          setCorTextos("textosLight")
      }
    }, [darkMode]);
  

  const [projetos, setProjetos] = useState([]);

  async function api() {
    const api = await fetch(
      "https://portfolio-mvfranca.vercel.app/projetos/Projetos.json"
    );
    const dados = await api.json();
    setProjetos(dados);
  }

  const [menuTec, setMenuTec] = useState(true);

  useEffect(() => {
    void api();
  }, []);

  function fecharTec() {
    setMenuTec(!menuTec);
  }

  return (
    <div id={`${ClassDarkMode}`}>
      <div className="conteudo2">
        <div>
          <h2 className={`titulo ${corTextos}`} >PROJETOS</h2>
          <p className={`${corTextos}`}>
            Aqui você terá acesso aos meus principais projetos e quais
            tecnologias eu mais utilizo.
          </p>
        </div>
        {projetos.map((projeto) => {
          const { id, titulo, img, tecnologias, descricao } = projeto;
          return (
            <Projeto
              src={img}
              alt={titulo}
              titulo={titulo}
              tecnologias={tecnologias}
              description={descricao}
              key={id}
              fecharTec={fecharTec}
              stateTec={menuTec}
              darkMode={darkMode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projetos;
