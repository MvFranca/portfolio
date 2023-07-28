/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { useEffect, useRef, useState } from "react";
import "../../styles/projetos/Projetos.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Projeto from "../projetos/Projeto";

type props = {
    darkMode: boolean;
}

const Projetos = ({darkMode}: props) => {

    const [ClassDarkMode, setIdDarkMode] = useState("lightProjects");
    const [corTextos, setCorTextos] = useState("textosLight");
    const [VerMais, setVerMais] = useState("mais")
    const conteudo = useRef<HTMLDivElement>(null)

    function verMais(){
      if( conteudo.current!.style.height == '130vh'){
      conteudo.current!.style.height = 'max-content'
      setVerMais("menos")}
      else{
        conteudo.current!.style.height = '130vh'
        setVerMais("mais")
      }
  
    }
  

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
      "https://marcosvinicius.vercel.app/projetos/Projetos.json"
    );
    const dados = await api.json();
    setProjetos(dados);
  }

  const [menuTec, setMenuTec] = useState(true);

  useEffect(() => {
    void api();
    conteudo.current!.style.height = '130vh'
  }, []);

  function fecharTec() {
    setMenuTec(!menuTec);
  }

  return (
    <div className={`${ClassDarkMode}`} id="projetosMenu">
      <div className="conteudo2" ref={conteudo}>
        <div>
          <h2 className={`titulo ${corTextos}`} >PROJETOS</h2>
          <p className={`${corTextos}`}>
            Aqui você terá acesso aos meus principais projetos e quais
            tecnologias eu mais utilizo.
          </p>
        </div>
        {projetos.map((projeto) => {
          const { id, titulo, img, tecnologias, descricao, link } = projeto;
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
              link={link}
            />
          );
        })}
      </div>
      <div id="verMais">
        <p onClick={verMais}>Ver {VerMais}</p>
      </div>
    </div>
  );
};

export default Projetos;
