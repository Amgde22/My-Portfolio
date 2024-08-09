import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

function NavLink(props) {
  const [t,i18n] = useTranslation("global")

  const soundEffectsArray = props.sfx
  const className = props.className

  return ( <> 
      <Button

className={`p-2 mx-1 text-black rounded-2xl border-black border-2 bg-white grow-0 shrink-0
  ${className} 
  ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"} 
  text-xs sm:text-sm      md:mx-3 md:w-24`}
      component="a"
      href={props.href}
      variant="white"
      onClick={playRandomSound}
    >
    
    {props.children}
    </Button>
  </> );
  function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * soundEffectsArray.length);
    const audio = new Audio(soundEffectsArray[randomIndex]);
    audio.volume = 0.5
    audio.playbackRate = 2
    audio.play();
  };

}

export default NavLink;