import React, { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import { useInView } from "framer-motion";
import SectionTitle from "../ui/sectionTitle";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      className={styles.contact}
      style={
        {
          "--opacity": isInView ? 1 : 0,
        } as React.CSSProperties
      }
    >
      <div className={styles.contactContainer}>
        <SectionTitle color="#dff800">Contact me</SectionTitle>
        <p ref={ref}>
          I am looking for job opportunities, feel free to send me an e-mail or
          contact me through the form
        </p>
        <a href="emailto:medertaab@gmail.com" className={styles.wideEmail}>medertaab@gmail.com</a>
      </div>

      <form>
        <input type="text" placeholder="Your name"></input>
        <input type="email" placeholder="Your e-mail address"></input>
        <textarea placeholder="Message"></textarea>
        <button type="button" className={styles.sendButton}>
          Send
        </button>
      </form>

      <a href="emailto:medertaab@gmail.com" className={styles.narrowEmail}>medertaab@gmail.com</a>
    </section>
  );
}
