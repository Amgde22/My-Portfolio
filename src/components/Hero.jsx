import { createStyles, Title, Text, Button, Container, rem, Modal } from '@mantine/core';
import { Dots } from './teenyComponents/Dots';
import  dotsSvg  from "../assets/dots.svg"
import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import ContactForm from './teenyComponents/ContactForm';
import { useEffect, useRef } from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    isolation:"isolate",
    overflow:"hidden",
    position: 'relative',
    paddingTop: rem(60),
    paddingBottom: rem(80),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },
  dotsWrapper:{
    position:"absolute",
    top:0,left:0,bottom:0,
    width:"calc(100% + 180px)",height:"calc(100% + 180px)",
    backgroundImage:`url(${dotsSvg})`,
    backgroundRepeat:"repeat",
    animation: "move-right 4s infinite",
    animationTimingFunction:"linear"
  },
  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },


  dotsLeft: {
    left: 0,
    top: 0,
  },
  bgAndPadding:{
    // backgroundColor:"rgba(75, 85, 99, 0.35)",
    // padding:"0.3rem .2rem",color:"white"
  }
  ,

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: "-1px",
    color: theme.white,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'start',
    },
  },

  highlight: {
    color: theme.white ,//.colors.blue[6],
  },

  description: {
    textAlign: 'center',
    fontWeight:"bold",
    width:"100%",
    [theme.fn.smallerThan('xs')]: {
      textAlign: 'start',
      fontWeight:"bolder",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,
      transformOrigin:"left",

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function Hero() {

  const [opened, { open, close }] = useDisclosure(false);
  const [t,i18n] = useTranslation("global")
  const direction = i18n.dir();
  const { classes } = useStyles();
  const aboutMe = t("hero.title")
  const titleShort = t("hero.titleShort")
  const description = t("hero.description")
  const buttonText = t("hero.buttonText")

  const titleElem = useRef()
  const myDescription = useRef()

  useEffect(()=>{
    titleElem.current.innerHTML = aboutMe
    const spanElements = titleElem.current.querySelectorAll('span');
    spanElements.forEach((span) => {
      span.style.borderBottom = "4px solid white"
    });

    myDescription.current.innerHTML = description
    
  })


  return (
    <Container id="hero" className={`hero under-navbar
  bg-gradient-to-r from-amber-300
  to-amber-500 ${classes.wrapper}`}  size={1400}>

      <div className={`dots-wrapper ${classes.dotsWrapper}`}></div>

      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}

      <div dir={direction} className={`${classes.inner}`}>
        <Title className={`fade-in-on-load-hero black-text-shadow-title ${classes.bgAndPadding} ${classes.title} ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`}>
            <span ref={titleElem} className=''> </span>

         {/* <Text component='p' className="w-max sm:inline-block pb-1 px-1" size={18}>( {titleShort} )</Text> */}
        </Title>

        <Container dir={direction} p={0} size={600}>
          <Text ref={myDescription} size="lg" color="white" className={`fade-in-on-load-hero mt-8 black-text-shadow ${classes.bgAndPadding} ${classes.description} ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`} >
          </Text>
        </Container>

        <div dir={direction} className={`contact-me-btn fade-in-on-load-hero ${classes.controls}`}>
          <Button 
          id="open-contact-form-btn"
          onClick={open}
          className={`hero-btn ${classes.control} ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`} color="transparent" size="lg">
            {buttonText}
          </Button>
        </div>


          <Modal
            size={"md"} radius={"md"} opened={opened} onClose={close} withCloseButton={false} centered>
            <ContactForm close={close} />
          </Modal>
      </div>
    </Container>
  );
}