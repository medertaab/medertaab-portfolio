import React, { useState, useEffect } from "react";
import styles from "./ShootingStars.module.scss";
import StarGraphic from "@public/svg/star-medium.svg";

export default function ShootingStars({ left, right }: any) {
  const numberOfStars = 3;
  const [starsRender, setStarsRender] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarsRender(false);
      setTimeout(() => {
        setStarsRender(true);
      }, 0);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [starsRender]);

  function star() {
    const top = Math.floor(Math.random() * 90);
    const left = Math.floor(Math.random() * 90);
    return (
      <span style={{ top: `${top}%`, left: `${left}%` }}>
        <StarGraphic />
      </span>
    );
  }

  const length = Array(numberOfStars).fill(0);

  if (starsRender)
    return (
      <div
        className={`${styles.shootingStars} ${left && styles.left} ${
          right && styles.right
        }`}
      >
        {length.map((it) => star())}
      </div>
    );
  else return null;
}
