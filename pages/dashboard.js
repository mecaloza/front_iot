import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>

      <main className={styles.main}>DASHBOARD</main>
    </div>
  );
}
