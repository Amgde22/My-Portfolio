import { createStyles, Title , rem} from "@mantine/core";
import useStyles from "../../mantineStyles";


function Header(props) {
  const className = props.className

  const {classes} = useStyles()
  return ( <div  className={`header`}>
    <p className={classes.title + " " + className}>
      {props.children}
    </p>
  </div> );
}

export default Header;