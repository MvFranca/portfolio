import IconMenuLine from '../../icons/IconMenu'
import styles from '../../styles/menu/Menu.module.css'

type props = {
  estadoMenu: () => void;
}

const Menu = ({estadoMenu}: props) => {

    return(
        <div id={styles.menu}>
          <div>
            <p>
              Port<span>fólio</span>
            </p>
          </div>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#">Habilidades</a>
            <a href="#">Projetos</a>
          </nav>
          <div className={styles.botaoMenu} onClick={estadoMenu}>
            <IconMenuLine width={43} height={43} color='#929292' id={styles.tracos}/>
          </div>
        </div>
    )
}

export default Menu