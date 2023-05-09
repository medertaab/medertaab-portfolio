import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/hero/SubHeader.module.scss";

export default function SubHeader() {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const interval = useRef() as any;
  const timeout = useRef as any;

  function scramble(string: string) {
    const symbols =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=";

    const newString = string.split("").map((it) => {
      return symbols.charAt(Math.floor(Math.random() * symbols.length));
    });
    return newString.join("");
  }

  useEffect(() => {

    interval.current = setTimeout(() => {
      setText(scramble(titles[current]));
    }, 300);

    timeout.current = setTimeout(() => {
      clearTimeout(interval.current);
      setText(titles[current]);
      
      setTimeout(() => {
        if (current === titles.length - 1) {
          setCurrent(0);
        } else {
          setCurrent(current + 1);
        }
      }, 2000);

    }, 2000);
  }, [current, text]);

  const titles = [
    "Illustrator",
    "Copywriter",
    "Translator",
    "Internet resident",
  ];

  return (
    <div className={styles.subHeader}>
      <h2>WEB DEVELOPER</h2>
      <span>&</span>
      <div className={styles.title}>{text}</div>
    </div>
  );
}
