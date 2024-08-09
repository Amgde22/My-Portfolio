import "./styles-test.css"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function AppTest() {
  const {ref , inView , entry } = useInView({
    threshold:1
  })
  const [clasy , setClasy] = useState("visible")


useEffect(()=>{
  setClasy(true)
 console.log({inView,clasy});

},[inView])


  return ( <div  id="app-test">

    <div ref={ref} >I am abservered {">:)"} : {inView? "yes" : "ni"}</div>

  </div> );
}

export default AppTest;