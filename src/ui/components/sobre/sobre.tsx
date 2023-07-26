import styles from "../../styles/sobre/Sobre.module.css";
import EsquerdaSobre from "./EsquerdaSobre";
import Projetos from "../projetos/Projetos";
import {useState, useEffect} from 'react'

const Sobre = () => {
    const [habilidades, setHabilidades] = useState([]);
  

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
      <EsquerdaSobre />
      <div className={styles.projetos}>
        <Projetos />
      </div>
    </div>
  );
};

export default Sobre;
