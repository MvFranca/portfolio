import styles from "../../styles/projetos/Projeto.module.css";

type props = {
  alt: string;
  src: string;
  description: string;
  tecnologias: string;
  titulo: string;
  fecharTec: () => void;
  stateTec: boolean;
};

const Projeto = ({ description, src, titulo }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.imagem}>
          <img src={src} alt="" />
        </div>
        <section>
          <h3>{titulo}</h3>
          <p>{description}</p>
          <a href="#" className={styles.github}>
            GITHUB
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projeto;
