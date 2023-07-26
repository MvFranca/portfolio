import IconArrowDownShort from '../../icons/IconArrowDown'
import styles from '../../styles/Inicio/Inicio2.module.css'


const Inicio2 = () => {
 

    return(
        <section className={styles.container}>
            <div className={styles.informacoes}>
                <h1>OLÁ, EU SOU O MARCOS VINICIUS</h1>
                <p>
                    Um apaixonado por tecnologia, atualmente atuando como Desenvolvedor Web Front-End,  criando e reproduzindo designs fiéis e responsivos.
                </p>
                <div id={styles.botoes}>
                    <a href="#" id={styles.github}>GitHub</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>

            <IconArrowDownShort width={30} height={30} color='#292C2D'
            className={styles.seta}
          />
        </section>
    )
}

export default Inicio2