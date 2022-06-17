import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";

import { BsCheckAll } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Message(props) {
  return (
    <div className={styles.container_messge}>
      <BsCheckAll
        className="icon_bar"
        style={{ color: "blue", marginRight: "10px", fontSize: "30px" }}
      ></BsCheckAll>
      <div className={styles.client_test}>{props?.sender}:</div>
      <div className={styles.text_messge}>{props?.message}</div>
    </div>
  );
}
