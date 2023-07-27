import { useEffect, useState } from "react";
import "../../styles/projetos/Projeto.css";

type props = {
  alt: string;
  src: string;
  description: string;
  tecnologias: string;
  titulo: string;
  fecharTec: () => void;
  stateTec: boolean;
  darkMode: boolean;
};

const Projeto = ({ description, src, titulo, darkMode }: props) => {
  const [ClassDarkMode, setIdDarkMode] = useState("lightProjeto");

  useEffect(() => {
    if (darkMode) setIdDarkMode("darkProjeto");
    else setIdDarkMode("lightProjeto");
  }, [darkMode]);

  return (
    <div className={`${ClassDarkMode}`}>
      <div className="conteudo3">
        <div className="imagem2">
          <img src={src} alt="" />
        </div>
        <section>
          <h3>{titulo}</h3>
          <p>{description}</p>
          <a href="#" className="github">
            GITHUB
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projeto;
