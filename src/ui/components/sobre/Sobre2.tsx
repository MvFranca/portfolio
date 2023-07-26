import styles from "../../styles/sobre/Sobre2.module.css";
import { useState, useEffect } from "react";

const Sobre2 = () => {
  const [habilidades, setHabilidades] = useState([]);

  const [conceito, setConceito] = useState(
    "Clique nos ícones para saber o que cada um significa."
  );

  async function hab() {
    const api = await fetch(
      //"https://portfolio-mvfranca.vercel.app/Habilidades.json"
      "https://portfolio-mvfranca.vercel.app/Habilidades.json"
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const dados = await api.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setHabilidades(dados);
  }

  useEffect(() => {
    void hab();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <h2>SOBRE MIM</h2>
          <p>
            Aqui você descobrirá um pouco mais sobre quem sou e sobre o que
            faço.
          </p>
        </div>
        <section>
          <div className={styles.informacoes}>
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
            <a href="#">CONTATO</a>
          </div>

          <div className={styles.imagem}>
            <h3>Minhas Habilidades</h3>
            <div className={styles.tecedescricao}>
              <div className={styles.tecnologias}>
                {habilidades.map((hab) => {
                  const { src, conceito } = hab;
                  const Src: string = src;
                  return (
                    <div
                      className={styles.tecnologia}
                      onClick={() => {
                        setConceito(conceito);
                      }}
                    >
                      <img src={Src} alt="" />
                    </div>
                  );
                })}
              </div>
              <p className={styles.conceito}>{conceito}</p>
                        </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre2;
