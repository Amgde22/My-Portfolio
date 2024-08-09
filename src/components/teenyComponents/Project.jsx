import { Carousel } from "@mantine/carousel";
import { Button, createStyles, Title  } from "@mantine/core";
import Header from "./Header";
import useStyles from "../../mantineStyles";
import { useTranslation } from "react-i18next";
const useExraStyles = createStyles((theme)=>({
  

  project:{
    position:"relative",
    "--shadowOffset":"0.75rem",
    boxShadow:"calc( var(--shadowOffset) * var(--position-modifier) ) var(--shadowOffset) hsl(43, 60%, 56%)",
    [theme.fn.smallerThan("sm")]:{
      "--shadowOffset":"0.5rem",
    },
  },

  
  projectPin:{
    "--size":"60px",
    width:"var(--size)",
    height:"var(--size)",
    backgroundColor:"rgb(251 191 36)",
    position:"absolute",
    top:`calc(var(--shadowOffset) * -1)`,
    zIndex:"10",
    borderRadius:"5%",
    boxShadow:"0 0 8px rgb(75 85 99)",
    [theme.fn.smallerThan("sm")]:{
      "--size":"48px",
    },
  },

  carousel:{
    flex:"0 0 auto",
    width:"550px",
    [theme.fn.smallerThan("md")]:{
      width:"450px"
    },
    [theme.fn.smallerThan('xs')]: {
    width:"100%",
    },
  },
  projectBody:{
    minWidth:"250px",
    padding:"0.5rem",
    flex:"1 1 0",
    [theme.fn.largerThan("xs")]: {
      padding:"1rem"
    }

  }

}))

function Project( 
  {title, href, desc,picdesc , twBackground , twText  , position , tags , reaDirection}) {
  const passed_children = picdesc
  if (passed_children == undefined) return

  const [t,i18n] = useTranslation("global")
  const linkText = t("projects.projectLink")
  const slides = generateSlides()
  const {classes} = {...useStyles(),...useExraStyles()}

  // position stuff
  const positionModifier = position == "left"? 1:-1
  
  return ( 
  <div className={`project mt-5 mb-16 p-5 mx-1 bg-gray-500
  ${twBackground} ${classes.wrapper} ${classes.project} ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}` } 
  style={{"--position-modifier":positionModifier}}>

    <div className={`${classes.projectPin}`}
      style={{
        [position]:`calc(var(--shadowOffset) * ${Math.abs(positionModifier)} * -1 )`
      }}
    ></div>

    {/* container for slides and description */}
    <div className="project-inner flex flex-row justify-center flex-wrap gap-0
    bg-gradient-to-t from-gray-600 to-gray-700">

      {/* description */}

        <div 
          style={{direction:reaDirection}}
        className={`pt-4  capitalize  ${classes.projectBody}`}>
          <Title className={"project-title text-white mb-4 text-2xl sm:text-3xl "+ twText }>{title}</Title>

          <p className="project-desc font-medium text-white px-2 text-lg">{desc}</p>

          <div className="tags flex flex-wrap gap-y-2 mb-8 mt-2">
            {tags?
              tags
              :null
            }
          </div>

          <Button
            className="bg-white hover:bg-gray-100 text-black font-extrabold
            border-2 border-black rounded-sm"
            component="a"
            href={href}
            >

            <div className="flex items-center gap-1">

            {linkText}

              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>

            </div>


          </Button>
      </div>
            {/* slide */}
            <div 
          style={{
              direction:"ltr",
              alignSelf:"center"
            }}
          className={classes.carousel + " border-t-4 border-amber-400"}>
              <Carousel loop>
                {slides}
              </Carousel>
        </div>
    </div>
    
  
  

  </div> );

function generateSlides() {
  return picdesc.map(([pic , desc] , index) =>{
    return ( <Carousel.Slide key={index}>
      <div 
       style={{direction:reaDirection}}
        className="project-slide w-full h-full relative">
        <img src={pic} alt="" className="project-slide-image w-full" />
        <p className="project-slide-desc
        absolute bottom-0 left-0 right-0 px-3
        border-l-2 border-r-2 border-amber-400
        sm:pt-3 md:pt-1 
        text-xl md:text-lg
        text-white capitalize
        ">
          {desc}
          </p>
      </div>
    </Carousel.Slide>
    )
  })
}


}

export default Project;