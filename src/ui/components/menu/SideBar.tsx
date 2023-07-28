import IconCloseOutline from "../../icons/fecharMenu";
import IconSunFill from "../../icons/IconDarkMode";
import IconInstagram from "../../icons/IconInsta";
import IconSun from "../../icons/IconLightMode";
import IconSound from "../../icons/IconSoundActived";
import IconSoundOff from "../../icons/IconSoundOff";
import IconBxlTelegram from "../../icons/IconTelegram";
import IconTwitter from "../../icons/IconTwitter";
import "../../styles/menu/SideBar.css";


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
  const [sideDark, setSideDark] = useState('sideLight')

  useEffect(()=> {
    desligar.current!.style.display = 'none'
    ligar.current!.style.display = 'flex'
  }, [])  

  useEffect(() => {
    if(!darkMode) {
      dark.current!.style.display = 'none'
      light.current!.style.display = 'flex'
      setSideDark("sideLight")
    }else{
      dark.current!.style.display = 'flex'
      light.current!.style.display = 'none'
      setSideDark("sideDark")
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
    <div>
      <div>
        <IconCloseOutline width={25} height={25} className="fecharMenu" />
      </div>
      <div className={`${sideDark}`}>
        <a href="https://www.instagram.com/marc0sfranca/" target="_blank">
          <div>
            <IconInstagram width={33} height={33} className = "icones"/>
          </div>
        </a>
        <div>
          <a href="https://twitter.com/euDEV__" target="_blank">
            <IconTwitter width={33} height={33} className = "icones"/>
          </a>
        </div>
        <div>
          <a href="https://t.me/+erR6yKBznYdmODcx">
            <IconBxlTelegram width={33} height={33} className = "icones"/>
          </a>
        </div>
        <div ref={light} onClick={alterarCores}>
          <IconSun width={30} height={30} className = "icones" />
        </div>
        <div ref={dark} onClick={alterarCores}>
          <IconSunFill  width={30} height={30} className = "icones" />
        </div>
        <div ref={ligar} onClick={ligarSom} className="botoesSom">
          <IconSoundOff width={30} height={30} className = "icones"  />
        </div>
        <div ref={desligar} onClick={desligarSom} className="botoesSom">
           <IconSound width={30} height={30} className = "icones"   />
        </div>
      
        <audio id="audio" ref={som} loop>
            <source src="./reminder.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default SideBar;
