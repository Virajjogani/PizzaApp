import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from 'axios'
import { PORTAL } from "../urls";
import Addbutton from "../components/Addbutton";
import Add from "../components/Add";
import { useState } from "react";
export default function Home({ pizzalist, admin }) {

  const [close, setClose] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<Addbutton setClose={setClose} />}
      <PizzaList PizzaList={pizzalist} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}


export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookie || ""
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }

  const res = await axios.get(PORTAL.api_url + "/api/products");
  return {
    props: {
      pizzalist: res.data
    }
  }
} 
