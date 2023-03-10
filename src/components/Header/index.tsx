import { useContext, useState } from 'react';
import {
  createStyles, 
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Text,
  Box,
  useMantineTheme,
  Indicator,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Leaf from '../../assets/img/leaf.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {BsFillHandbagFill} from 'react-icons/bs'
import { CartContext } from '../../context/ContextCart';
const HEADER_HEIGHT = rem(70);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    justifyItems:'center',
    alignContent:"center",
    minWidth:"80vw",
    
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: 'green' }).background,
      color: theme.fn.variant({ variant: 'light', color: 'green' }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderMantine({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const {push} = useRouter() 
  const {colors} = useMantineTheme()
  const {cart} = useContext(CartContext)
  const items = links.map((link) => (
  
    
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
        push(link.link)
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Box  sx={{ display:'flex', flexDirection:"column" , alignItems:"flex-end", justifyContent:'space-around' ,}}  >
        <Image src={Leaf} width={26} height={26} alt='img'></Image>
        <Text pt='0px' lh={'1.2rem'} ff={'Yuji Boku'} fz="1.8rem">Natcults</Text>
        </Box>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <Link href={'/Cart'}>
          <Box pos={'relative'}>
            {
              cart.length>0&& 
              <ItemBag itensLength={cart.length}/>
            }
          <BsFillHandbagFill size={30} color={colors['green']['5']}/>
          </Box>
        </Link>

      </Container>
    </Header>
  );
}

function ItemBag({itensLength}:{itensLength:number}){
  return(
    <>
          <Box  w={'1.1rem'} h={'1.1rem'} bg={'red'} pos={'absolute'} sx={{borderRadius:'10px', display:'flex' , alignItems:'center',justifyContent:'center',}} top={0} right={0} >
            <Text color={'white'}  fz={'0.8rem'}>{itensLength}</Text>
          </Box>
    </>
  )
}