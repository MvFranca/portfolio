import IconInstagram from "../../icons/IconInsta";
import IconSun from "../../icons/IconLightMode";
import IconSound from "../../icons/IconSoundActived";
import IconBxlTelegram from "../../icons/IconTelegram";
import IconTwitter from "../../icons/IconTwitter";
import styles from "../../styles/menu/SideBar.module.css";

const SideBar = () => {
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
      <div>
        <IconSun width={30} height={30} color="#292c2d"/>
      </div>
      <div>
        <IconSound width={30} height={30} color="#292c2d"/>
      </div>
    </div>
  );
};

export default SideBar;
