import whatsappIcon from "../../assets/whatsapp.svg"
import telegramIcon from "../../assets/telegram.svg"
import { useTranslation } from "react-i18next";
function Socials({ openEmailForm , displayHeading=true }) {
  const [t,i18n] = useTranslation("global")
  const headingText = t("socials.heading")
  return (     
  <div className="socials flex items-center gap-2">

    {displayHeading? 
    <p className="black-text-shadow text-white text-xl font-bold">{headingText}</p>
    :null}

    {/* telegram */}
      <a href="https://t.me/amgdeg" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <img src={telegramIcon} alt="" className="icon" />
      </a>
    {/* whatsapp */}
      <a href="https://wa.me/213556640229?text=Assalamu%20Alaikum" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <img src={whatsappIcon} alt="" className="icon" />
      </a>
    {/* linkedIN */}
      <a href="https://www.linkedin.com/in/gouri-abdel-madjide-11b904236/" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(59 130 246)" width="32" height="32" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
    {/* Email */}
      <a
        href={openEmailForm ? null : "mailto:myEmail@gmail.com"}
        target={openEmailForm ? null : "_blank"}
        className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={openEmailForm ? openEmailForm : null}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 48 48">
          <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
        </svg>
      </a>
  </div>
);
}

export default Socials;