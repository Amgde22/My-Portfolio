import { useTranslation } from "react-i18next";
import Socials from "./teenyComponents/Socials";

function Footer() {
  const [t,i18n] = useTranslation("global")
  const text = t("footer.text")



  return ( <div className="footer bg-black p-6">
    <a
      href="#"
      onClick={backToTop}
      className={`my-2 text-white font-bold opacity-70 hover:opacity-100 flex gap-2 ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}>
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
    </a>
    <Socials openEmailForm={openContactForm} displayHeading={false}/>

  </div> );

  function openContactForm() {
    const formBtn = document.querySelector("#open-contact-form-btn")
    formBtn?.click()
  }
  function backToTop() {
    setTimeout(() => {
      const formBtn = document.querySelector("#open-contact-form-btn")
      formBtn.focus()
    }, 800);
    
  }
}

export default Footer;