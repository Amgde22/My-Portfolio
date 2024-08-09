import { createStyles, RingProgress } from "@mantine/core";
import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";



const useStyles  = createStyles(theme=>({
  skillContainer:{
    // border:"1px solid violet",
    display:"grid",
    gridTemplateColumns:"min-content 2fr",
    gridTemplateRows:"min-content 1fr",
    height:"100%", width:"80%",margin:"auto",

  },

  skillProgressCircleArea:{
    position:"relative",
    display:"flex",alignItems:"end",
    gridColumn:"1/2",

    overflow:"hidden"
  },
  progressCircle:{

  },
  skillProgressBarsArea:{
    overflow:"hidden",
    position:"relative",

    paddingBottom:"1rem",
    gridColumn:"2 / 3",
    display:"flex",flexDirection:"column",justifyContent:"end",


  },
  skillDescriptionArea:{
    fontSize:"1.2em",
    gridColumn:"1 / 3",
    padding:".5rem 1rem",
    color:"white"
  },


  centeredText:{
    textAlign:"center",
    fontSize:"1.3rem",color:"white",
    fontWeight:"bolder"
  },

  barsContainer:{
    display:"flex",
    gap:".5rem"
  },
  blurDiv:{
    position:"absolute",
    width:"100%",bottom:"0",
    height:"60px"

  }

}))
function Skill({text , color ,value  , desc , textColor , headingFontSize, readDirection}) {

  const [t,i18n] = useTranslation("global")

  const {classes} = useStyles()
  const barElemenrs = useMemo(()=>getBars(value , color) , [value])
  
  const descriptionElement = useRef()
  const headerElement = useRef()
  useEffect(()=>{
    descriptionElement.current.innerHTML = desc
    const spanElements = descriptionElement.current.querySelectorAll('span');
    spanElements.forEach((span) => {
      span.style.color = textColor?textColor:color;
    });

    if (headingFontSize) {
      headerElement.current.style.fontSize = headingFontSize
    }
  },[])

  return ( <div className={classes.skillContainer}>
    {/* circe */}
    <div className={classes.skillProgressCircleArea}>
    <RingProgress
    className={`z-10 ${classes.progressCircle}`}
      size={120}
      thickness={12}

      roundCaps
      label={<p className={classes.centeredText}>{value}%</p>}
      sections={[
        { value: value, color: color },
      ]}
    />
        <div className={`bg-gradient-to-t from-slate-500 to-transparent ${classes.blurDiv}`}></div>

    
    </div>
    {/* bars */}
    <div className={classes.skillProgressBarsArea} >
        <h1 ref={headerElement} className="text-white font-extrabold text-center ">{text}</h1>
        <div className={`z-10 ${classes.barsContainer}`}>
        {barElemenrs}
        </div>
        <div className={`bg-gradient-to-t from-slate-500 to-transparent ${classes.blurDiv}`}></div>
    </div>
    {/* descriprion */}
    <div 
    style={{
      direction:readDirection
    }}
    className={`bg-gradient-to-b from-slate-500 to-slate-600
        ${classes.skillDescriptionArea} font-extrabold rounded-b-xl ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}
    ref={descriptionElement}>
      {/* {desc} */}
    </div>
  </div> );
  
  function getBars(value,color) {
    value = value / 2 // round to 50% 
    const bars_array = []
    // 5 iters array
    for (let i = 0; i < 5; i++) {
      // console.log(value);
      if (value >= 10) {
        bars_array.push( <Bar  value={10} color={color} key={text+i} /> )
        value = value - 10
      }
 else if(value == 0){
        bars_array.push( <Bar value={0} color={color} key={text+i}/> )
      }
else if(value < 10){
        bars_array.push( <Bar value={value} color={color} key={text+i}/>)
        value = 0
      }
      
    }

    return bars_array
  }
}

export default Skill;

function Bar({value,color}) {
  value = value * 10
  return ( <div className="bar relative w-8 h-16 bg-white
  border-solid  border-2 " style={{borderColor:color}}>
    <div className="bar-filler absolute left-0 right-0 bottom-0"
    style={{height:`${value}%`,backgroundColor:color}}
    ></div>
  </div> );
}

