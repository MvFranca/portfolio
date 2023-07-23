import IconGithub from "../../icons/IconGithub";
import IconInstagram from "../../icons/IconInsta";
import IconLinkedin from "../../icons/IconLinkedIn";
import styles from "../../styles/contato/Contato.module.css";

const Contato = () => {
  return (
    <div className={styles.container}>
      <div className={styles.esquerda}>
        <h2 className={styles.titulo}>Contato</h2>
        <form>
          <div>
            <label htmlFor="Nome"></label>
            <input
              type="text"
              name="Nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label htmlFor="Nome"></label>
            <input
              type="text"
              name="Nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label htmlFor="Nome"></label>
            <input
              type="text"
              name="Nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <textarea
              name="Mensagem"
              id="mensagem"
              placeholder="Digite sua mensagem..."
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      <div className={styles.direita}>

        <div className={styles.informacoes}>
            <div>
              <h2 className={styles.titulo2}>E-mail para contato</h2>
              <p>m4rcosfranc4@gmail.com</p>
            </div>
            <div className={styles.todasasRedes}>
              <h2 className={styles.titulo2}>Adicione nas redes</h2>
              <div className={styles.minhasRedes}>
                <div className={styles.estruturaRedes}>
                  <IconLinkedin
                    width={33}
                    height={33}
                    className={styles.redes}
                    color="#fff"
                  />
                  <p>@mvfranc4</p>
                </div>
                <div className={styles.estruturaRedes}>
                  <IconGithub
                    width={33}
                    height={33}
                    className={styles.redes}
                    color="#fff"
                  />
                  <p>@MvFranca</p>
                </div>
                <div className={styles.estruturaRedes}>
                  <IconInstagram
                    width={33}
                    height={33}
                    className={styles.redes}
                    color="#fff"
                  />
                  <p>@marc0sfranca</p>
                </div>

                <div>
                <p><strong>Desenvolvido por Marcos Vinicius</strong></p>
                <p><strong>
                    Portfólio © 2023</strong>
                </p>
            </div>

              </div>
            </div>
        </div>

      </div>

    </div>
  );
};

export default Contato;
