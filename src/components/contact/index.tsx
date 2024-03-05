import React, { useState, useRef } from "react";
import styles from "./Contact.module.scss";
import { useInView } from "framer-motion";
import SectionTitle from "../ui/sectionTitle";
import Loader from "./loader";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    const formData = formRef.current
      ? new FormData(formRef.current)
      : (null as any);

    formData.append("access_key", import.meta.env.FORM_KEY);

    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    console.log(res);
    if (res.success) {
      setResult("Message sent!");
    } else {
      setResult("Something went wrong...");
    }
    setLoading(false);
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
        <SectionTitle>Contact me</SectionTitle>
        <p ref={ref}>
          I am looking for job opportunities, feel free to send me an e-mail or
          contact me through the form
        </p>
        <a href="emailto:medertaab@gmail.com" className={styles.wideEmail}>
          medertaab@gmail.com
        </a>
      </div>

      <form ref={formRef} name="contact" onSubmit={handleSubmit} method="POST">
        <input type="text" name="name" placeholder="Your name" required></input>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail address"
          required
        ></input>
        <textarea name="message" placeholder="Message" required></textarea>
        <div className={styles.actionArea}>
          <button type="submit" className={styles.sendButton}>
            {loading ? <Loader /> : "Send"}
          </button>
          {result && <span className={styles.messageAlert}>{result}</span>}
        </div>
      </form>

      <a href="emailto:medertaab@gmail.com" className={styles.narrowEmail}>
        medertaab@gmail.com
      </a>
    </section>
  );
}
