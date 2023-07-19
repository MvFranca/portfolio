import styles from '../../styles/sobre/Sobre.module.css'
import EsquerdaSobre from './EsquerdaSobre'
import Projetos from '../projetos/Projetos'

const Sobre = () => {
    return(
        <div className={styles.container}>
            <EsquerdaSobre/>
            <div className={styles.projetos}>
                <Projetos/>
            </div>
        </div>
    )
}

export default Sobre