import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useContext } from 'react';
import { CartContext } from '../../context/ContextCart';
import {BsCheckCircleFill} from 'react-icons/bs'
type ItensProps={
    id:string
    name:string
    price:number
    description:string
    img:string
  }
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: 'IconUsers' },
  { label: '100 km/h in 4 seconds', icon: 'IconGauge '},
  { label: 'Automatic gearbox', icon: 'IconManualGearbox' },
  { label: 'Electric', icon: 'IconGasStation' },
];

export function LargeCardItem({description,id, name,price,img}:ItensProps) {
  const { classes } = useStyles();
  const {setCart,addItem} = useContext(CartContext)
  function showNotification(product:String){
    notifications.show({
      title:'Produto Adicionado',
      message:`Você Adicionou ${product} ao seu carrinho.`,
      color: 'green',
      icon:<BsCheckCircleFill size={30} />
    })
  }
  function addProductCard({id,product}:{id:string,product:string}){
    addItem(id)
    showNotification(product)
  }
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      {/* <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} /> */}
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} shadow={'lg'}>
      <Card.Section className={classes.imageSection}>
      <Image width={350} height={350} src={`http://localhost:3000/teas/${img}`} alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{name}</Text>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                {new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(price)}
            </Text>

          </div>

          <Button radius="xl" color={'green'}   style={{ flex: 1 }}  onClick={()=>{addProductCard({id,product:name})}} >
            Comprar Agora
          </Button>
          
        </Group>
      </Card.Section>
    </Card>
  );
}