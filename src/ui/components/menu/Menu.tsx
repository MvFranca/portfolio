import styles from '../../styles/menu/Menu.module.css'

const Menu = () => {
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/56/56763.png"
            alt=""
            id={styles.tracos}
          />
        </div>
    )
}

export default Menu