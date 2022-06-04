import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";

export default function Machines() {
  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>
      <Head>
        <title>IOT EIA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>MACHINES</main>
    </div>
  );
}