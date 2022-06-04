import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Sidemenu.module.css";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function InfoCard(props) {
  return (
    <div className={styles.card_container}>
      <div className={styles.dot_value}>{props?.topic}</div>

      <div className={styles.row_card}>
        <BsFillLightningChargeFill
          className={styles.icon}
        ></BsFillLightningChargeFill>
        <div className={styles.dot_value}>{props?.value}</div>
      </div>
    </div>
  );
}
