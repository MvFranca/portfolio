import styles from "../../styles/Inicio/Inicio.module.css";


const Inicio = () => {
  return (
      <div id={styles.inicio}>
        
        <div id={styles.apresentacao}>
          <section id={styles.textos}>
            <div className={styles.info}>
              <div>
                <h1 id={styles.nome}>
                  Marcos Vinicius
                </h1>
                <p>
                  Desenvolvedor Front-End
                </p>
                  <span id={styles.lorem}>
                    Crio e reproduzo designs fiéis e responsivos de acordo  <br />com o que a modernidade pede.
                  </span>
                
              </div>

              <div id={styles.botoes}>
                <a href="#" className={styles.redes}>
                  LinkedIn
                </a>
                <a href="#" className={styles.redes} id={styles.github}>
                  GitHub
                </a>
              </div>
              
            </div>
          </section>
          
          <section id={styles.imagens}>
            <div className={styles.direita}>
              <div id={styles.minhaimagem1}>
                <img
                  src="./eu-web.png"
                  alt=""
                  id={styles.minhaimagem1}
                />
              </div>
            </div>

            <div id={styles.outrasredes}>
              <div className={styles.redespessoais}>
                <img
                  src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/04/logo-twitter-png-fundo-transparente7.png?resize=626%2C510&ssl=1"
                  alt="logo twitter"
                  className={styles.twitter}
                />
              </div>
              <div className={styles.redespessoais}>
                <img
                  src="./instagram-svg.svg"
                  alt="logo instagram"
                  className={styles.instagram}
                />
              </div>
              <div className={styles.redespessoais}>
                <img
                  src="./telegram-png.png"
                  alt="logo telegram"
                  className={styles.telegram}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Inicio;
