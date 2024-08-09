function SkillName({text,color,toDirection, active}) {
  const bar_animation_length = 200
  const transform_direction =(active ? 
     (toDirection == "left"? "right":"left") // of inactive grow opposite of direction
    
    : toDirection)  // if active i grow to toDirection
    
  
  return ( <div className={`skill-name text-xs sm:text-base ${active?"active":""} grow relative`}
  style={{
    "--color":color,
    "--length":`${bar_animation_length}ms`,
    "--direction":(transform_direction),

  }}
  >

    <p className="skill-name-text-container relative font-extrabold text-center text-gray-400 capitalize sm:text-[1.1em] px-2 pt-4 pb-2 z-10">
    <span className="skill-name-text z-100">{text}</span>
    </p>
    <div className="skill-name-bar skill-name-bar-gray bottom-0 left-0 w-full h-1 z-10 bg-gray-500"></div>
    <div className="skill-name-bar skill-name-bar-colored bottom-0 left-0 w-full h-1 z-20 absolute"></div>
  </div> );
}

export default SkillName;
/*
  darwek nta baghi bar grow big when active 
  and shrink when from active to inactive
  and do nothing if nothing

  if we go forward in carousel
    prev bar shrink to "right"
    next bar grow from  "left"

  if we go back in carousel
    prev bar shrink to "left"
    next bar grow from  "right"

  we can track next and prev slide with the state callback

  idea1: we have another state for direction
          we pass elems direction :
          if im active and direction is "from left" then i
            gtow to "right"
          if im inactive and direction is left then i
            shrink to right
*/