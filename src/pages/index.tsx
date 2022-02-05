import Head from "next/head";
import { Main } from "../components/Main";
import styles from './styles.module.scss'


export default function Home() {

  return (
    <div className={styles.test}>
      <Head >
         <title>Natcults</title>
      </Head>
      <Main ></Main>
    </div>
  )
}
