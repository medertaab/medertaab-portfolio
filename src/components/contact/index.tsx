import React, { useState, useRef } from "react";
import styles from "./Contact.module.scss";
import { useInView } from "framer-motion";
import SectionTitle from "../ui/sectionTitle";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    const myForm = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: myForm?.toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.log(error));
  }

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
        <a href="emailto:medertaab@gmail.com" className={styles.wideEmail}>
          medertaab@gmail.com
        </a>
      </div>

      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name"></input>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail address"
        ></input>
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
        {submitted && (
          <span className={styles.messageAlert}>Message sent!</span>
        )}
      </form>

      <a href="emailto:medertaab@gmail.com" className={styles.narrowEmail}>
        medertaab@gmail.com
      </a>
    </section>
  );
}
