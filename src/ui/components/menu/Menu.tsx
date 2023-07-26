import IconMenuLine from '../../icons/IconMenu'
import styles from '../../styles/menu/Menu.module.css'

type props = {
  estadoMenu: () => void;
}

const Menu = ({estadoMenu}: props) => {

    return(
        <div id={styles.menu}>
          <div className={styles.conteudo}>
            <div>
              <p>
                Port<span>fólio</span>
              </p>
            </div>
            <nav>
              <div><a href="#inicio">Início</a></div>
              <div><a href="#sobre">Sobre</a></div>
              <div><a href="#">Habilidades</a></div>
              <div><a href="#">Projetos</a></div>
            </nav>
            <div className={styles.botaoMenu} onClick={estadoMenu}>
              <IconMenuLine width={43} height={43} color='#929292' id={styles.tracos}/>
            </div>
          </div>
         
        </div>
    )
}

export default Menu