function Tag({twText,twBg,twBorder,children}){
  return ( 
<span className=
{`${twText} ${twBg} ${twBorder} 
  tag rounded-3xl border-2 border-solid w-max 
  py-1 px-3 mx-1 font-extrabold text-sm
  flex-grow-0 flex-shrink-0`}>
    {children}
  </span> );
}

export default Tag;