import { useEffect, useState } from "react";
import styles from "../../styles/habilidades/Habilidades.module.css";

const Habilidades = () => {
  const [habilidades, setHabilidades] = useState([]);
  const [conceito, setConceito] = useState(
    "Clique nos ícones para saber o que cada um significa."
  );

  async function hab() {
    const api = await fetch(
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
      <h2 className={styles.titulo2}>Habilidades</h2>
        

        <div className={styles.conteudo}>
          
          <div className={styles.esquerda}>
          <h2 className={styles.titulo}>Habilidades</h2>
          <div className={styles.habilidades}>
            {habilidades.map((hab) => {
              const { src, conceito } = hab;
              const Src: string = src;
              return (
                <div className={styles.redespessoais}  onClick={() => {
                  setConceito(conceito);
                }}>
                  <img
                    src={`${Src}`}
                    alt="" 
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.direita}>
          <p>{conceito}</p>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
