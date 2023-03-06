import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    background:
      `url('http://localhost:3000/banner.jpg') red`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textShadow:'2px 2px 8px black ',

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
      textShadow:'2px 2px 8px black ',
    },
  },

  highlight: {
    color: theme.colors['green'][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',
    textShadow:'1px 1px 10px black ',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,
    background:theme.colors['green'][4],
    color:'white',

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.colors['green'][4],
    backgroundColor: 'rgba(255, 255, 255, .4)',
    border:` 1px solid ${theme.colors['green'][3]}`,

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>

      <Overlay color="#000" opacity={0} zIndex={1} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          Cuide-se com quem pode te oferecer o melhor da {' '}
          <Text component="span" inherit className={classes.highlight}>
            Natureza
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Produtos naturais selecionado com a melhor qualidade
            para você desfrutar dos beneficios que a natureza pode proporcionar.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Promoções
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Mais vendidos
          </Button>
        </div>
      </div>
    </div>
  );
}