import { createStyles } from "@mantine/core";
import useStyles from "../mantineStyles";
import Header from "./teenyComponents/Header";
import { Carousel } from '@mantine/carousel';

import p1f1 from "../assets/project1/f1.png";import p2f1 from "../assets/project2/f1.png";import p3f1 from "../assets/project3/f1.png";import p4f1 from"../assets/project4/f1.png"
import p1f2 from "../assets/project1/f2.png";import p2f2 from "../assets/project2/f2.png";import p3f2 from "../assets/project3/f2.png";import p4f2 from"../assets/project4/f2.png"
import p1f3 from "../assets/project1/f3.png";import p2f3 from "../assets/project2/f3.png";import p3f3 from "../assets/project3/f3.png";import p4f3 from"../assets/project4/f3.png"

import Project from "./teenyComponents/Project";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import Tag from "./teenyComponents/Tag";

// const useStyles = createStyles(theme=>({

// }))
function Projects(props) {
  const {classes} = useStyles()
  const [t,i18n] = useTranslation("global")
  const  reaDirection=i18n.dir()

  const headerRef = useRef()
  const observed_refs=[headerRef]
  useEffect(observeElements(),[...observed_refs])


  const title = t("projects.title")
  const p1Title = t("projects.project1.title")
  const p1Desc = t("projects.project1.desc")
  const p1df1 = t("projects.project1.a")
  const p1df2 = t("projects.project1.b")
  const p1df3 = t("projects.project1.c")

  const p2Title = t("projects.project2.title")
  const p2Desc = t("projects.project2.desc")
  const p2df1 = t("projects.project2.a")
  const p2df2 = t("projects.project2.b")
  const p2df3 = t("projects.project2.c")

  const p3Title = t("projects.project3.title")
  const p3Desc = t("projects.project3.desc")
  const p3df1 = t("projects.project3.a")
  const p3df2 = t("projects.project3.b")
  const p3df3 = t("projects.project3.c")

  const p4Title = t("projects.project4.title")
  const p4Desc = t("projects.project4.desc")
  const p4df1 = t("projects.project4.a")
  const p4df2 = t("projects.project4.b")
  const p4df3 = t("projects.project4.c")

  const arabic =t("projects.tags.arabic")
  const english =t("projects.tags.english")

  const vue =t("projects.tags.vue")
  const complex =t("projects.tags.complex")
  const game =t("projects.tags.game")

  const productivity =t("projects.tags.productivity")
  const react =t("projects.tags.react")
  const pwa =t("projects.tags.pwa")
  const localSrorage =t("projects.tags.localStorage")
  const weather =t("projects.tags.weather")
  const api =t("projects.tags.api")
  const houses =t("projects.tags.houses")
  const files =t("projects.tags.files")



  return ( <div id="projects" className={classes.wrapper + `projects
  bg-gradient-to-br from-gray-600 to-gray-800
  px-0 sm:px-3 pt-4  md:px-4   `}>
    <div ref={headerRef} className="invisible">
    <Header className={`title text-center text-white ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}>
        {title}
    </Header>
    </div>

{/* wizard's tower */}
<Project reaDirection={reaDirection} title={p4Title} desc={p4Desc} href="https://wizards-tower.pages.dev/"
      position={"left"}
      tags={[
        <Tag twBg={"bg-amber-100"} twText={"text-amber-600"} twBorder={"border-amber-600"} >{english}</Tag>,
        <Tag twBg={"bg-blue-200"} twText={"text-blue-700"} twBorder={"border-blue-700"} >{game}</Tag>,

        <Tag twBg={"bg-red-100"} twText={"text-red-600"} twBorder={"border-red-600"} >{complex}</Tag>,
        <Tag twBg={"bg-green-100"} twText={"text-green-700"} twBorder={"border-green-700"} >{vue}</Tag>,
      ]}
      picdesc={[
        [p4f1 , p4df1],
        [p4f2 , p4df2],
        [p4f3 , p4df3],
      ]}
    />
{/* 90 days */}
    <Project reaDirection={reaDirection} title={p1Title} desc={p1Desc} href="https://amgde22.github.io/90Days/"
      position={"right"}
      tags={[
        <Tag twBg={"bg-amber-100"} twText={"text-amber-600"} twBorder={"border-amber-600"} >{arabic}</Tag>,
        <Tag twBg={"bg-violet-100"} twText={"text-violet-600"} twBorder={"border-violet-600"} >{productivity}</Tag>,
        <Tag twBg={"bg-blue-100"} twText={"text-blue-600"} twBorder={"border-blue-600"} >{react}</Tag>,
        <Tag twBg={"bg-orange-100"} twText={"text-orange-600"} twBorder={"border-orange-600"} >{localSrorage}</Tag>,
        <Tag twBg={"bg-red-100"} twText={"text-red-600"} twBorder={"border-red-600"} >{pwa}</Tag>,

      ]}
      picdesc={[
        [p1f1 , p1df1],
        [p1f2 , p1df2],
        [p1f3 , p1df3],
      ]

    }
    />
{/* weather timee */}
<Project reaDirection={reaDirection} title={p2Title} desc={p2Desc} href="https://amgde22.github.io/weathernow/"
      position={"left"}
      tags={[
        <Tag twBg={"bg-amber-100"} twText={"text-amber-600"} twBorder={"border-amber-600"} >{english}</Tag>,
        <Tag twBg={"bg-blue-200"} twText={"text-blue-700"} twBorder={"border-blue-700"} >{weather}</Tag>,
        <Tag twBg={"bg-red-100"} twText={"text-red-600"} twBorder={"border-red-600"} >{api}</Tag>,

      ]}
      picdesc={[
        [p2f1 , p2df1],
        [p2f2 , p2df2],
        [p2f3 , p2df3],
      ]}
    />
{/* rent a house */}
{/* <Project reaDirection={reaDirection} title={p3Title} desc={p3Desc} href="https://mohamedshop-9fcb8.web.app/"
      position={"right"}
      tags={[
        <Tag twBg={"bg-amber-100"} twText={"text-amber-600"} twBorder={"border-amber-600"} >{arabic}</Tag>,
        <Tag twBg={"bg-green-100"} twText={"text-green-600"} twBorder={"border-green-600"} >{houses}</Tag>,
        <Tag twBg={"bg-purple-100"} twText={"text-purple-600"} twBorder={"border-purple-600"} >{files}</Tag>,
      ]}
      picdesc={[
        [p3f1 , p3df1],
        [p3f2 , p3df2],
        [p3f3 , p3df3],
      ]}
    /> */}
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
}

export default Projects;
