import { Carousel } from "@mantine/carousel";
import { useEffect, useRef, useState } from "react";
import Header from "./teenyComponents/Header";
import Skill from "./teenyComponents/Skill";

import nextControllIconSvg from "../assets/arrowRight.svg"
import prevControllIconSvg from "../assets/arrowLeft.svg"
import { createStyles } from "@mantine/core";
import { useTranslation } from "react-i18next";
import SkillName from "./teenyComponents/SkillName";

const useStyles = createStyles((theme =>({
  skillsCarousel:{
    margin:"auto",
    maxWidth:"600px",


  }
})))

function Skills() {
  const {classes} = useStyles()
  const [slideIndex , setSlideIndex] = useState(0)
  const [toSlideDirection , setToSlideDirection] = useState()

  const headerRef = useRef()
  const observed_refs=[headerRef]
  useEffect(observeElements(),[...observed_refs])


  const carouselHright = 200
  const nextControllIcon = <img width={20} src={nextControllIconSvg} />
  const prevControllIcon = <img width={20} src={prevControllIconSvg} />

  const [t,i18n] = useTranslation("global")
  const readDirection = i18n.dir()
  const title = t("skills.title")
  const cssDesc = t("skills.css")
  const htmlDesc = t("skills.html")
  const jsDesc = t("skills.javascript")
  const reactDesc = t("skills.react")
  const vueDesc = t("skills.vue")
  const firebaseDesc = t("skills.firebase")

  const otherSkills = t("skills.otherskills")
  const npm = t("skills.npm")
  const git = t("skills.git")
  const bootstrap = t("skills.bootstrap")
  const tailwind = t("skills.tailwind")
  const svelte = t("skills.svelte")

  return ( <div id="skills" className={`skills bg-gray-900 py-14  `}>
    <div ref={headerRef} className="invisible">
    <Header className={`title font-extrabold text-center text-white ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}>
      {title}
    </Header>

    </div>

    <div className={`carousel-size-replica  ${classes.skillsCarousel}`}>
    <div className="skill-names w-4/5 m-auto flex flex-wrap">
      <SkillName text={"css"} color={"rgb(59 130 246)"}  toDirection={toSlideDirection} active={slideIndex == 0}/>
      <SkillName text={"HTML"} color={"rgb(239 68 68)"}  toDirection={toSlideDirection} active={slideIndex == 1}/>
      <SkillName text={"Javascript"} color={"rgb(251, 191, 36)"} toDirection={toSlideDirection} active={slideIndex == 2}/>
      <SkillName text={"react"} color={"rgb(56 189 248)"} toDirection={toSlideDirection} active={slideIndex == 3}/>
      <SkillName text={"vue"} color={"rgb(66 184 131)"} toDirection={toSlideDirection} active={slideIndex == 4}/>
      <SkillName text={"firebase"} color={"rgb(249 115 22)"} toDirection={toSlideDirection} active={slideIndex == 5}/>
      <SkillName text={"more..."} color={"rgb(251 251 251)"} toDirection={toSlideDirection} active={slideIndex == 6}/>


    </div></div>

  <Carousel className={`${classes.skillsCarousel} mt-5`}
  onSlideChange={setSlideStates}

  controlSize={50}  
  >

    <Carousel.Slide>
      <Skill readDirection={readDirection} text={"css"} desc={cssDesc} color={"rgb(59 130 246)"} value={86} textColor="rgb(147 197 253)"  />
    </Carousel.Slide>

    <Carousel.Slide>
      <Skill readDirection={readDirection} text={"HTML"} desc={htmlDesc} color={"rgb(239 68 68)"} value={97} textColor="rgb(248 113 113)"  />
    </Carousel.Slide>

    <Carousel.Slide>
      <Skill readDirection={readDirection} text={"Javascript"} desc={jsDesc} color={"rgb(251, 191, 36)"} value={94}   />
    </Carousel.Slide>

    <Carousel.Slide>
      <Skill readDirection={readDirection} text={"React"} desc={reactDesc} color={"rgb(56 189 248)"} value={87}   />
    </Carousel.Slide>
    <Carousel.Slide>
      <Skill readDirection={readDirection} text={"Vue Js"} desc={vueDesc} color={"rgb(66 184 131)"} value={90} textColor="rgb(74 222 128)" headingFontSize={"1.5em"}   />
    </Carousel.Slide>
    <Carousel.Slide>
      <Skill readDirection={readDirection} text={"Google's Firebase"} desc={firebaseDesc} color={"rgb(249 115 22)"} value={84} textColor="rgb(253 186 116)" headingFontSize={"1.5em"}   />
    </Carousel.Slide>
    <Carousel.Slide>
    <div className={`bg-gradient-to-t w-4/5 m-auto  from-slate-500 to-transparent h-[80px] flex flex-col-reverse`}>
      <h1 
        style={{
          direction:readDirection
        }}
        className="font-extrabold px-3 text-white"
        >
          {otherSkills}
      </h1>
    </div>

      <div className="other-skills w-4/5 m-auto pt-0 text-white bg-gradient-to-b from-slate-500 to-slate-600 font-bold rounded-b-xl p-4">
        <ul className="capitalize">
        <li>{npm}</li>
        <li>{git}</li>
        <li >{bootstrap}</li>
        <li >{tailwind}</li>
        <li className="text-orange-400">{svelte}</li>
        </ul>
      </div>
    </Carousel.Slide>

  </Carousel>





  </div> );
 function observeElements() {
  const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.remove("invisible")
        entry.target.classList.add("fade-in-side")
      }
    })
  })

  return function(){
    [...observed_refs].forEach(ref=>{
      if (ref.current) {
        observer.observe(ref.current)
      }
    })
  }
}
  function setSlideStates(currentSlide) {
    setSlideIndex(prev =>{
      if (prev > currentSlide) {
        setToSlideDirection("left")
      }
      else if(prev < currentSlide){
        setToSlideDirection("right")
      }

      return currentSlide
    })
  }
  
}

export default Skills;