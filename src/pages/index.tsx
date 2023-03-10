import Head from "next/head";
import { Main } from "../components/Main";

import {GetServerSideProps} from 'next'

export default function Home() {

  return (
    <div >
      <Head >
         <title>Natcults</title>
      </Head>
      <Main ></Main>
    </div>
  )
}

