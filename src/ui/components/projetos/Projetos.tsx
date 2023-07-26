/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"

import { useEffect, useState } from 'react'
import styles from '../../styles/projetos/Projetos.module.css'


import "react-responsive-carousel/lib/styles/carousel.min.css"

import Projeto from '../projetos/Projeto'

const Projetos = () => {

    const [projetos, setProjetos] = useState([])
  

    async function api() {
        const api = await fetch('https://portfolio-mvfranca.vercel.app/projetos/Projetos.json')
        const dados = await api.json()
        setProjetos(dados)
      /*  await fetch('http://localhost:3000/dados/carrossel.json').then((response) => response.json()).then(setProjetos) */
    }

    const [menuTec, setMenuTec] = useState(true)

    useEffect(() => {
        void api()
    }, [])

    function fecharTec(){
        setMenuTec(!menuTec)
        
    }

    return (
        <div id={styles.fullProjects}>
            <div className={styles.conteudo}>
                <div>
                    <h2 className={styles.titulo}>
                        PROJETOS
                    </h2>
                    <p>
                        Aqui você terá acesso aos meus principais projetos e quais tecnologias eu mais utilizo.
                    </p>
                </div>
                     {projetos.map(projeto => {
                                const { id, titulo, img, tecnologias, descricao } = projeto
                                return (
                                    <Projeto
                                        src={img}
                                        alt={titulo}
                                        titulo={titulo}
                                        tecnologias={tecnologias}
                                        description={descricao}
                                        key={id}
                                        fecharTec = {fecharTec}
                                        stateTec = {menuTec}
                                    />
                                )
                            })}
            </div>
        </div>
    )
}

export default Projetos  