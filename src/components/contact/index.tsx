import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h3>Contact me</h3>
        <p>
          I am looking for job opportunities, please feel free to contact me
        </p>
        <button type="button" className={styles.emailButton}>Or copy my e-mail address to clipboard</button>

        <form>
          <input type="text" placeholder="Your name"></input>
          <input type="email" placeholder="Your e-mail address"></input>
          <textarea placeholder="Message"></textarea>
          <button type="button" className={styles.sendButton}>Send</button>
        </form>
      </div>
    </section>
  );
}
