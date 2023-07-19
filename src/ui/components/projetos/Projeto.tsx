
import styles from '../../styles/projetos/Projeto.module.css'


type props = {
    alt: string;
    src: string;
    description: string;
    tecnologias: string;
    titulo: string;
    fecharTec: () => void;
    stateTec: boolean;
}



const Projeto = ({ description, alt, src, titulo }: props) => {

  
    return (
            <div className={styles.projetos}>

                <div className={styles.imagem}>
                    <img src={src} alt={alt} />
                </div>

                <div className={styles.informacoes}>

                    <h2>
                        {titulo}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>

            </div>
    )
}

export default Projeto