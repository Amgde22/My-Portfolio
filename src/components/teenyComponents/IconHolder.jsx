import { createStyles ,rem,em , px} from "@mantine/core";

const holder_size = 60

const useStyles = createStyles((theme)=>({
  holder:{
    padding:".7em",
    gridRow:"1 / span 2",
    gridColumn:"1 / 2",
    width:rem(holder_size * 1.5),
    height: rem(holder_size * 1.5),
    border:"5px solid black",
    borderRadius:"50%",
    display:"grid",
    placeItems:"center",
    background:theme.white,  


    [`@media (max-width: 500px )`]: {
      display:"none"
    },

    [theme.fn.smallerThan('sm')]: {
    padding:".325em",

      width:rem(holder_size),
      height: rem(holder_size),
      border:"3px solid black",
    },


  },
  icon:{
    width:"75%",

  }
}))
function IconHolder({src,className}) {
  const {classes} = useStyles()
  return ( <div className={`icon-holder me-2 sm:me-6 ${classes.holder} ${className}`}>
    <img
    className={classes.icon}
    src={src}  alt="Icon" />
  </div> );
}

export default IconHolder;