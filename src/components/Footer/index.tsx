import { createStyles, Anchor, Group, ActionIcon, rem, Box, Text, Overlay, Center } from '@mantine/core';
import Image from 'next/image';
import Leaf from '../../assets/img/leaf.png'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,

    
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:'3rem',

  
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
  copy:{

    flexDirection:'column',
    height:100,
    borderTop:'1px solid ',
    borderTopColor:theme.colors['gray']['1'],
    [theme.fn.smallerThan('sm')]: {
    },
  }
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
    <div className={classes.footer}>
      
      <div className={classes.inner}>
      <Box  sx={{ display:'flex', flexDirection:"column" , alignItems:"flex-end", justifyContent:'space-around' ,}}  >
        <Image src={Leaf} width={26} height={26} alt='img'></Image>
        <Text pt='0px' lh={'1.2rem'} ff={'Yuji Boku'} fz="1.8rem">Natcults</Text>
        </Box>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            {/* <IconBrandTwitter size="1.05rem" stroke={1.5} /> */}
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            {/* <IconBrandYoutube size="1.05rem" stroke={1.5} /> */}
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            {/* <IconBrandInstagram size="1.05rem" stroke={1.5} /> */}
          </ActionIcon>
        </Group>
      </div>

    </div>
    <Center  className={classes.copy} >
        <Text h={30} color={'gray'}>CyberChipset | 2023 </Text>
        <Text size={'xs'} color={'gray'}>Leonardo Belilo Messias</Text>
    </Center>

    </>
  );
}