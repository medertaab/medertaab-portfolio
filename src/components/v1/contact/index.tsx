import React, { useState, useRef } from "react";
import styles from "./Contact.module.scss";
import SectionTitle from "../sectionTitle";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <SectionTitle>Contact me</SectionTitle>
        <p>
          I am looking for job opportunities, feel free to send me an e-mail:
        </p>
        <a href="emailto:medertaab@gmail.com" className={styles.email}>
          medertaab@gmail.com
        </a>
      </div>
    </section>
  );
}
