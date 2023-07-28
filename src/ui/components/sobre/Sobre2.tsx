import "../../styles/sobre/Sobre2.css";
import { useState, useEffect } from "react";

type props = {
  darkMode: boolean;
};

const Sobre2 = ({ darkMode }: props) => {
  const [habilidades, setHabilidades] = useState([]);
  const [conceito, setConceito] = useState(
    "/* Clique nos ícones para saber o que cada um significa. */"
  );

 
  async function hab() {
    const api = await fetch(
      "https://marcosvinicius.vercel.app/Habilidades.json"
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const dados = await api.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setHabilidades(dados);
  }

  useEffect(() => {
    void hab();
  }, []);

  const [sobreDark, setSobreDark] = useState("sobreLight")

  useEffect(()=> {
    if(darkMode) setSobreDark("sobreDark")
    else setSobreDark("sobreLight")
}, [darkMode])

  return (
    <div className={`${sobreDark}`} id="sobreMenu">
      <div className="conteudo4">
        <div className="titulo2">
          <h2>SOBRE MIM</h2>
          <p>
            Aqui você descobrirá um pouco mais sobre quem sou e sobre o que
            faço.
          </p>
        </div>
        <section>
          <div className="informacoes2">
            <h3>Quem sou?</h3>
            <p>
              Meu nome é <strong>Marcos Vinicius</strong>, tenho 19 anos e sou
              um apaixonado por tecnologia. Estudo{" "}
              <strong>Desenvolvimento Web</strong> há quase{" "}
              <strong>2 anos</strong>, o que me permitiu ter contato com várias
              tecnologias e práticas utilizadas no mercado.
              <br />
              Atualmente, estou realizando o curso{" "}
              <strong>Bacharelado em Sistemas de Informação</strong>, no
              Instituto Federal de Alagoas, e meu foco tem sido se tornar um
              <strong> Desenvolvedor Fullstack</strong>.
              <br />
              <strong>Me relaciono facilmente</strong> com outras pessoas
              pessoas, além de
              <strong> aprender rapidamente</strong> conteúdos que se façam
              necessários.
            </p>
            <a href="#contatoMenu">CONTATO</a>
          </div>

          <div className="imagem1">
            <h3>Minhas Habilidades</h3>
            <div className="tecedescricao">
              <div className="tecnologias">
                {habilidades.map((hab) => {
                  const { src, conceito } = hab;
                  const Src: string = src;
                  return (
                    <div
                      className="tecnologia"
                      onClick={() => {
                        setConceito(conceito);
                      }}
                    >
                      <img src={Src} alt="" />
                    </div>
                  );
                })}
              </div>
              <p className="conceito">{conceito}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre2;
