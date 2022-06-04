import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Sidemenu.module.css";
import { FaHome, FaIndustry } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Sidemenu() {
  const router = useRouter();

  return (
    <div className={styles.container_sidemenu}>
      <FaHome className={styles.icon} onClick={() => router.push("/")}></FaHome>
      <BsGraphUp
        className={styles.icon}
        onClick={() => router.push("/dashboard")}
      ></BsGraphUp>
      <FaIndustry
        className={styles.icon}
        onClick={() => router.push("/machines")}
      ></FaIndustry>
    </div>
  );
}
