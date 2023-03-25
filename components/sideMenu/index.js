import styles from "./sideMenu.module.css";
import Image from "next/image";
import HomeIcon from "../../public/home.png";
import AboutIcon from "../../public/about.png";
import ResumeIcon from "../../public/resume.png";
import PortfolioIcon from "../../public/portfolio.png";
import ServicesIcon from "../../public/service.png";
import ContactIcon from "../../public/mail.png";
import Toggler from "../../public/toggler.svg";
import MobileSideMenu from "./mobileSideMenu";
import { useState } from "react";

const SideMenu = () => {
  const [addClass, setAddClass] = useState(false);
  const [active, setActive] = useState(1);
  const handleToggler = () => {
    setAddClass(!addClass);
  };

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <>
      <div
        role="button"
        onClick={handleToggler}
        onKeyPress={handleToggler}
        id={styles.toggler}
      >
        <Image src={Toggler} alt="toggle" />
      </div>
      <MobileSideMenu addClass={addClass} setAddClass={setAddClass} />
      <ul className={styles.sideMenu}>
        <a href="#home">
          <li
            onClick={() => handleActive(1)}
            className={`${styles.menuItem} ${
              active === 1 ? styles.active : ""
            }`}
          >
            <Image
              src={HomeIcon}
              className={active === 1 && styles.activeImg}
              alt="Home"
              width={15}
              height={15}
            />
            <span>Home</span>
          </li>
        </a>
        <a href="#about">
          <li
            onClick={() => handleActive(2)}
            className={`${styles.menuItem} ${
              active === 2 ? styles.active : ""
            }`}
          >
            <Image
              src={AboutIcon}
              className={active === 2 && styles.activeImg}
              alt="About"
              width={18}
              height={18}
            />
            <span>About</span>
          </li>
        </a>
        <a href="#resume">
          <li
            onClick={() => handleActive(3)}
            className={`${styles.menuItem} ${
              active === 3 ? styles.active : ""
            }`}
          >
            <Image
              className={active === 3 && styles.activeImg}
              src={ResumeIcon}
              alt="Education"
              width={18}
              height={18}
            />
            <span>Resume</span>
          </li>
        </a>

        <a href="#services">
          <li
            onClick={() => handleActive(4)}
            className={`${styles.menuItem} ${
              active === 4 ? styles.active : ""
            }`}
          >
            <Image
              className={active === 4 && styles.activeImg}
              src={ServicesIcon}
              alt="Services"
              width={15}
              height={15}
            />
            <span>Services</span>
          </li>
        </a>
        <a href="#portfolio">
          <li
            onClick={() => handleActive(5)}
            className={`${styles.menuItem} ${
              active === 5 ? styles.active : ""
            }`}
          >
            <Image
              className={active === 5 && styles.activeImg}
              src={PortfolioIcon}
              alt="Skills"
              width={18}
              height={18}
            />
            <span>Portfolio</span>
          </li>
        </a>
        <a href="#contact">
          <li
            onClick={() => handleActive(6)}
            className={`${styles.menuItem} ${
              active === 6 ? styles.active : ""
            }`}
          >
            <Image
              className={active === 6 && styles.activeImg}
              src={ContactIcon}
              alt="Projects"
              width={18}
              height={18}
            />
            <span>Contact</span>
          </li>
        </a>
      </ul>
    </>
  );
};

export default SideMenu;
