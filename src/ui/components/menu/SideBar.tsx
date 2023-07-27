import IconSunFill from "../../icons/IconDarkMode";
import IconInstagram from "../../icons/IconInsta";
import IconSun from "../../icons/IconLightMode";
import IconSound from "../../icons/IconSoundActived";
import IconSoundOff from "../../icons/IconSoundOff";
import IconBxlTelegram from "../../icons/IconTelegram";
import IconTwitter from "../../icons/IconTwitter";
import styles from "../../styles/menu/SideBar.module.css";
import {useEffect, useRef, useState, } from 'react'

type props = {
  alterarCores: () => void;
  darkMode: boolean;
}

const SideBar = ({alterarCores, darkMode}: props) => {
  const som = useRef<HTMLAudioElement>(null)
  const ligar = useRef<HTMLDivElement>(null)
  const desligar = useRef<HTMLDivElement>(null)
  const [stateSom, setStateSom] = useState(false)
  const light = useRef<HTMLDivElement>(null)
  const dark = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    desligar.current!.style.display = 'none'
    ligar.current!.style.display = 'flex'
  }, [])  

  useEffect(() => {
    if(!darkMode) {
      dark.current!.style.display = 'none'
      light.current!.style.display = 'flex'
    
    }else{
      dark.current!.style.display = 'flex'
      light.current!.style.display = 'none'
    }
  },[darkMode])


  function ligarSom(){
    if(!stateSom){
      void som.current!.play()
      desligar.current!.style.display = 'flex'
      ligar.current!.style.display = 'none'
      setStateSom(true)
    }
  }

  function desligarSom(){
    if(stateSom){
    void som.current!.pause()
    desligar.current!.style.display = 'none'
    ligar.current!.style.display = 'flex'
    setStateSom(false)
  }
  }



  return (
    <div className={styles.container}>

      <div>
        <IconInstagram width={33} height={33} color="#292c2d"/>
      </div>

      <div>
        <IconTwitter width={33} height={33} color="#292c2d"/>
      </div>

      <div>
        <IconBxlTelegram width={33} height={33} color="#292c2d"/>
      </div>

      <div ref={light} onClick={alterarCores}>
        <IconSun width={30} height={30} color="#292c2d" />
      </div>

      <div ref={dark} onClick={alterarCores}>
        <IconSunFill  width={30} height={30}/>
      </div>

      <div ref={ligar} onClick={ligarSom} className={styles.botoesSom}>
        <IconSoundOff width={30} height={30} color="#292c2d"  />
      </div>

      <div ref={desligar} onClick={desligarSom} className={styles.botoesSom}>
         <IconSound width={30} height={30} color="#292c2d"   />
      </div>
    
      <audio id={styles.audio} ref={som} loop>
          <source src="./reminder.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default SideBar;
