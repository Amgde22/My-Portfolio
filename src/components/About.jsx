import { Avatar } from "@mantine/core";
import { useTranslation } from "react-i18next";
import useStyles from "../mantineStyles";
import Header from "./teenyComponents/Header";
import questions from "../assets/question-mark-svgrepo-com.svg"
import stars from "../assets/stars.svg"

import IconHolder from "./teenyComponents/IconHolder";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutList from "./teenyComponents/AboutList";

function About() {

  const observredRef = useRef()
  const [content_visisble,setContent_visisble] = useState(false)
  const visibility_side_fade_class = content_visisble? "fade-in-side":"invisible"
  const visibility_top_fade_class = content_visisble? "fade-in-above":"invisible"
  
  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      const parent =  entries[0]
      if (parent.isIntersecting) {
        setContent_visisble(true)
      }

    },{threshold:0.7})
    observer.observe(observredRef.current)
  },[])

  const {classes} = useStyles()
  const [t,i18n] = useTranslation("global")
  const direction = i18n.dir();
  const paddingStyle = direction === 'rtl' ? { paddingRight: '8vw' } : { paddingLeft: '8vw' };
  
  const aboutME = t("about.aboutme")
  const section1_title = t("about.whoImFor.title")
  const section1_desc =  t("about.whoImFor.main")

  const section2_title = t("about.whatIDo.title")

  const section2_a_header =  t("about.whatIDo.a_header") ,section2_a = t("about.whatIDo.a")
  const section2_b_header =  t("about.whatIDo.b_header") ,section2_b = t("about.whatIDo.b")
  const section2_c_header =  t("about.whatIDo.c_header") ,section2_c = t("about.whatIDo.c")
  const section2_d_header =  t("about.whatIDo.d_header") ,section2_d = t("about.whatIDo.d")
  // const section2_e_header =  t("about.whatIDo.e_header") ,section2_e = t("about.whatIDo.e")

  return ( <div id="aboutMe" ref={observredRef}  className={`about bg-white ${classes.wrapper}`}>



    <Header  className={`${visibility_side_fade_class} font-extrabold text-center mb-6 ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}>	 {aboutME}</Header>
    <div className={`${visibility_side_fade_class} ps- about-holder-grid mb-6`} 
    style={paddingStyle}
    dir={direction}>
      <IconHolder src={questions} />
      <Header className={`title -translate-x-4 font-extrabold border-b-4 border-amber-400 w-fit ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}> &#8226; {section1_title}</Header>
      <p className="about-list text-lg font-bold font2" >{section1_desc}</p>
    </div>



    <div className={` ${visibility_side_fade_class} about-holder-grid`} 
    style={paddingStyle}
    dir={direction}>
        {/* icon */}
      <IconHolder src={stars}  />
        {/* header */}
      <Header className={`title -translate-x-4 ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}> 
        {section2_title}
      </Header>

        {/* list */}
      <ul className="about-list text-lg font2 capitalize">
          {/* List items inside fade-in controls */}
        <div className={visibility_top_fade_class}>
          <AboutList header={section2_a_header} content={section2_a} />
        </div>

        <div className={visibility_top_fade_class}>
          <AboutList header={section2_b_header} content={section2_b} />
        </div>

        <div className={visibility_top_fade_class}>
          <AboutList header={section2_c_header} content={section2_c} />
        </div>

        <div className={visibility_top_fade_class}>
          <AboutList header={section2_d_header} content={section2_d} />
        </div>

        {/* <div className={visibility_top_fade_class}>
          <AboutList header={section2_e_header} content={section2_e} />
        </div>   */}
      </ul>

    </div>
    
  </div> );
}

export default About;