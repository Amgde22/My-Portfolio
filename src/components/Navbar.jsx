import { useTranslation } from "react-i18next";
import { Button, createStyles, rem, Title } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import NavLink from "./teenyComponents/NavLink";

import staplerSound1 from "../assets/sounds/stapler1.mp3"
import staplerSound2 from "../assets/sounds/stapler2.mp3"
import globe from "../assets/globe.svg"


function Navbar() {

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const [t,i18n] = useTranslation("global")
  const readDirection = i18n.dir()
  const main = t("navbar.main")
  const link1 = t("navbar.section1")
  const link2 = t("navbar.section2")
  const link3 = t("navbar.section3")
  const otherLanguage = t("otherLanguage")

  const linkStyle = {color:"black" , border:"2px solid gray"}

  function changeLanguage() {
    const newLanguage = i18n.language === 'ar' ? 'en' : 'ar';
    // i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    window.location.reload();
  }
  

  return ( <div
    style={{
      direction:readDirection
    }}

    className="navbar flex flex-wrap-reverse
  bg-gradient-to-r from-gray-600 to-gray-700
  text-white text-xl z-30
  p-3 md:p-4">
    <button onClick={changeLanguage} className="text-base sm:ps-3 sm:pe-4   flex items-center font-bold me-auto cursor-pointer text-black bg-white border-2 border-black  w-max">
      <img className="icon" src={globe} alt="Lang"  />
      <p className="hidden sm:block">{otherLanguage}</p>
    </button>

    <div className="flex">
      <NavLink className="fade-in-on-load" sfx={[staplerSound1,staplerSound2]} href="#aboutMe">{link1}</NavLink>
      <NavLink className="fade-in-on-load" sfx={[staplerSound1,staplerSound2]} href="#projects">{link2}</NavLink>
      <NavLink className="fade-in-on-load px-3" sfx={[staplerSound1,staplerSound2]} href="#skills">{link3}</NavLink>

    </div>

  </div>
  );
}

export default Navbar;