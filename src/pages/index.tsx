
import Head from "next/head";
import { Header } from "../components/Header";
import { Main } from "../components/Main";


export default function Home() {
  return (
    <>
    <Head>
    <title>natcults</title>
    </Head>
    <Header></Header>
    <Main></Main>
    </>
  )
}
