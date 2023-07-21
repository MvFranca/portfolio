import styles from "../../styles/habilidades/Habilidades.module.css";

const Imagem = () => {
    return(
        <div className={styles.redespessoais}  onClick={mostrarConceito('opa')}>
                <img src={`${src}`} alt=""/>
            </div>
    )
}

export default Imagem 