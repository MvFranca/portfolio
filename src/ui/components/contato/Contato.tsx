import IconGithub from "../../icons/IconGithub";
import IconInstagram from "../../icons/IconInsta";
import IconLinkedin from "../../icons/IconLinkedIn";
import styles from "../../styles/contato/Contato.module.css";

const Contato = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Contato</h2>

      <div className={styles.conteudo}>
        <div className={styles.esquerda}>
          <form>
            <section className={styles.formDentro}>
              <input
                type="text"
                name="Nome"
                id="nome"
                placeholder="Digite seu nome"
              />

              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Digite seu E-mail"
              />

              <input
                type="text"
                name="Assunto"
                id="assunto"
                placeholder="Digite o assunto"
              />

              <textarea
                name="Mensagem"
                id="mensagem"
                placeholder="Digite sua mensagem..."
              />

              <button type="submit">Enviar</button>
            </section>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
