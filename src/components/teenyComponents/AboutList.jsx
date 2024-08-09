function AboutList({header,content}) {
  return ( 
    <li className="mb-2"> 
      <span className="font1 font-extrabold capitalize ">
        &#8226; {header} : 
      </span> {content}
    </li>

   );
}

export default AboutList;