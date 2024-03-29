import IconArrowDownShort from "../../icons/IconArrowDown";
import "../../styles/Inicio/Inicio2.css";
import { useEffect, useState } from "react";

type props = {
  darkMode: boolean;
};

const Inicio2 = ({ darkMode }: props) => {
  const [ClassDarkMode, setIdDarkMode] = useState("lightMode");
  const [corTextos, setCorTextos] = useState("textosLight");
  const [corBotoes, setCorBotoes] = useState("botoesLight");

  useEffect(() => {
    if (darkMode) {
      setIdDarkMode("darkMode");
      setCorTextos("textosDark");
      setCorBotoes("botoesDark");
    } else {
      setIdDarkMode("lightMode");
      setCorTextos("textosLight");
      setCorBotoes("botoesLight");
    }
  }, [darkMode]);

  return (
    <section className={`${ClassDarkMode}`} id="infoMenu">
      <div className="informacoes" >
        <h1 className={`${corTextos} textAnimado`} >OLÁ, EU SOU O MARCOS VINICIUS</h1>
        <p className={`${corTextos}`}>
          Um apaixonado por tecnologia, atualmente atuando como Desenvolvedor
          Web Front-End, criando e reproduzindo designs fiéis e responsivos.
        </p>
        <div id="botoes">
          <a href="https://github.com/MvFranca/" id="github" className={`${corBotoes}`} target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mvfranc4/" className={`${corBotoes}`} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>

      <a href="#sobreMenu" id="setinha">
        <IconArrowDownShort
          width={30}
          height={30}
          className={`seta ${corTextos}`}
        />
      </a>
    </section>
  );
};

export default Inicio2;
