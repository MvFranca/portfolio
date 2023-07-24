/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"

import { useEffect, useState } from 'react'
import styles from '../../styles/projetos/Projetos.module.css'


import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import Projeto from '../projetos/Projeto'

const Projetos = () => {

    const [projetos, setProjetos] = useState([])
  

    async function api() {
        const api = await fetch('https://devmarcosfranca.vercel.app/dados/carrossel.json')
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
            <h2 className={styles.titulo}>
                PROJETOS
            </h2>
            <Carousel className={styles.carrossel}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                transitionTime={3}
                 infiniteLoop={true}
                >
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
            </Carousel>
        </div>
    )
}

export default Projetos  