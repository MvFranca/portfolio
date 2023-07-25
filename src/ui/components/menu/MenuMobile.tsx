import styles from '../../styles/menu/MenuMobile.module.css'



type props = {
  stateMenu: boolean;
}

const MenuMobile = ({stateMenu}: props) => {

  if(!stateMenu) return

  return (
    <header className={styles.cabecalho}>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#">Habilidades</a>
        <a href="#">Projetos</a>
      </nav>
    </header>
  );
};

export default MenuMobile;
