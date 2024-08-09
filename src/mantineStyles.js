import { createStyles ,rem} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(80),
    paddingBottom: rem(60),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(60),
      paddingBottom: rem(40),

    },
  },

  title: {
    fontSize: rem(40),
    letterSpacing: "-0.07ch",
    color: theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(32),
    },
  },
}))

export default useStyles