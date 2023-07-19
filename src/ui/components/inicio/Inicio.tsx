import { Fragment } from "react"

import styles from "../../styles/Inicio/Inicio.module.css"

import IconBxDownArrowCircle from "../../icons/IconArrowDown"

const Inicio = () => {
    return(
        <Fragment>
        <section className={styles.container}>
        <div id= {styles.inicio}>
            <div id={styles.menu}>
                <div>
                    <p>
                        Port<span>fólio</span>
                    </p>
                </div>
                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#">Habilidades</a>
                    <a href="#">Projetos</a>
                </nav>
                <img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="" id={styles.tracos}/>
            </div>
            <div id={styles.apresentacao}>
                <section id={styles.textos}>
                    <div>
                        <p>
                            Olá, meu nome é <br/>
                            <span id={styles.nome}>
                                    Marcos Vinicius.
                            </span>
                            <br/>
                            Desenvolvedor 
                            <strong>
                                Front-end
                            </strong>
                        </p>
                        <p id={styles.lorem}>
                            "Nas grandes batalhas da vida, o primeiro passo  para <br />a vitória  é o desejo de vencer" - <span>Mahatma Gandhi</span>
                        </p>
                    </div>
                    <div id={styles.botoes}>
                        <a href="#" className={styles.redes}>
                            LinkedIn
                        </a>
                        <a href="#" className={styles.redes} id={styles.github}>
                            GitHub
                        </a>
                    </div>
                    <div className={styles.rolagem}>
                            <div>
                                <p>
                                    Scroll Down           
                                </p>
                                <IconBxDownArrowCircle width={30} height={30}/> 
                            </div>
                    </div>
                </section>
                <section id={styles.imagens}>
                    <div id={styles.minhaimagem1}>
                       <img src="./minha-foto-com-eclipse.png" alt="" id={styles.minhaimagem1}/>
                    </div>

                    <div id={styles.outrasredes}>
                        <div className={styles.redespessoais}>
                            <img src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/04/logo-twitter-png-fundo-transparente7.png?resize=626%2C510&ssl=1" alt="logo twitter" className={styles.twitter}/>
                        </div>
                        <div className={styles.redespessoais}>
                            <img src="./instagram-svg.svg" alt="logo instagram" className={styles.instagram}/>
                        </div>
                        <div className={styles.redespessoais}>
                            <img src="./telegram-png.png" alt="logo telegram" className={styles.telegram}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
    </Fragment>
    )
}

export default Inicio