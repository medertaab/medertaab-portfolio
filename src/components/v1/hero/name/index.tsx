import React, { useEffect, useState } from "react";
import styles from "./Name.module.scss";
import Sparkle from "@component/svg/sparkle.svg?react";
import ReactLogo from "@component/svg/reactlogo.svg?react";

type NameProps = {
  toggleStars: (value: React.SetStateAction<boolean>) => void;
};

export default function Name({ toggleStars }: NameProps) {
  const [theme, setTheme] = useState('magic');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleThema = () => {
    setTheme(prevTheme => (prevTheme === 'magic' ? 'lime' : 'magic'));
  };
  
  return (
    <div className={styles.name}>
      <div>
        <h1 className={styles.firstName}>MEDER</h1>
        <button
          aria-label="Star button"
          className={styles.starButton}
          onClick={toggleStars as any}
        >
          <Sparkle />
        </button>
      </div>
      <div>
        <button
          onClick={toggleThema as any}
          aria-label="Atom button"
          className={styles.reactButton}
        >
          <ReactLogo />
        </button>
        <h1 >TAAB</h1>
      </div>
    </div>
  );
}
