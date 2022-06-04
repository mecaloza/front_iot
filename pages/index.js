import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";
import InfoCard from "../components/InfoCard";

var mqtt = require("mqtt");

var options = {
  protocol: "mqtts",
  username: "warpface837",
  password: "bl1d2ozcz7SCc0LT",
  clientId: "User_front",
};
var cont = 0;
export default function Home() {
  const [current_val, setcurrentval] = useState("");
  const [volt_val, setvolt_val] = useState("");
  let current_ref = useRef("");
  current_ref.current = current_val;
  useEffect(() => {
    var client = mqtt.connect("mqtt://warpface837.cloud.shiftr.io", options);
    client.subscribe("Planta_electrica/#");
    var note;
    client.on("message", function (topic, message) {
      note = message.toString();
      if (topic === "Planta_electrica/corriente") {
        setcurrentval(note);
      } else if (topic === "Planta_electrica/voltaje") {
        setvolt_val(note);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>
      <Head>
        <title>IOT EIA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <InfoCard topic={"corriente"} value={current_val}></InfoCard>
        <InfoCard topic={"voltaje"} value={volt_val}></InfoCard>
      </main>
    </div>
  );
}
