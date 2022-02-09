import Head from "next/head";
import { Main } from "../components/Main";
import styles from './styles.module.scss'
import {GetServerSideProps} from 'next'
import { loadStripe } from '@stripe/stripe-js';

export default function Home(props) {
console.log(props)
  return (
    <div className={styles.test}>
      <Head >
         <title>Natcults</title>
      </Head>
      <Main ></Main>
    </div>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
      nome:'leonardo'
    }, // will be passed to the page component as props
  }
}