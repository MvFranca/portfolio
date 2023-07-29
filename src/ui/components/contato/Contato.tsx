/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import IconGithub from "../../icons/IconGithub";
import IconInstagram from "../../icons/IconInsta";
import IconLinkedin from "../../icons/IconLinkedIn";
import "../../styles/contato/Contato.css";

type props = {
  darkMode: boolean;
};

const Contato = ({ darkMode }: props) => {
  const [contatoDark, setContatoDark] = useState("contatoLight");
  const form = useRef<HTMLFormElement>(null)
  const textarea = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (darkMode) setContatoDark("contatoDark");
    else setContatoDark("contatoLight");
  }, [darkMode]);
/*
 function submit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    const valores = Array.from(form.current!.getElementsByTagName("input") ?? [])

    valores.map((valor) =>{
      valor.value = ''
    })
    textarea.current!.value = ''
  }*/

  return (
    <div className={`${contatoDark}`} id="contatoMenu">
      <div className="tudo">
        <h2 className="titulo4">CONTATO</h2>
        <p>Aqui você pode preencher o formulário para me enviar um E-mail.</p>
        <div className="conteudo5">
          <div className="esquerda">


            <form ref={form} action="https://api.staticforms.xyz/submit" method="POST" >
              <input type="hidden" name="accessKey" value={"3f07fe18-58b5-45e6-842d-ccea3cbe97ab"}/>
              <input type="hidden" name="redirectTo" value="https://marcosvinicius.vercel.app/"/> 

              <section className="formDentro">
                <input
                  type="text"
                  name="name"
                  id="nome"
                  placeholder="Digite seu nome"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu E-mail"
                />
                <input
                  type="text"
                  name="subject"
                  id="assunto"
                  placeholder="Digite o assunto"
                />
                <textarea
                  name="message"
                  id="mensagem"
                  placeholder="Digite sua mensagem..."
                  ref={textarea}
                />
                
              </section><button type="submit" id="submit">ENVIAR</button>
            </form>


          </div>
          <div className="direita">
            <div className="informacoes5">
              <div>
                <h2 className="titulo3">E-mail para contato</h2>
                <p>m4rcosfranc4@gmail.com</p>
              </div>
              <div className="todasasRedes">
                <h2 className="titulo3">Adicione nas redes</h2>
                <div className="minhasRedes">
                  <div className="estruturaRedes">
                    <IconLinkedin
                      width={33}
                      height={33}
                      className="redes"
                      color="#fff"
                    />
                    <p>@mvfranc4</p>
                  </div>
                  <div className="estruturaRedes">
                    <IconGithub
                      width={33}
                      height={33}
                      className="redes"
                      color="#fff"
                    />
                    <p>@MvFranca</p>
                  </div>
                  <div className="estruturaRedes">
                    <IconInstagram
                      width={33}
                      height={33}
                      className="redes"
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
    </div>
  );
};

export default Contato;
