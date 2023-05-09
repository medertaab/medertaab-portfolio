import React from "react";
import styles from "../styles/Skills.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Skills() {
  const skillTitles = [
    "Javascript",
    "Typescript",
    "NextJS",
    "Vite",
    "Gatsby",
    "Sass",
    "Tailwind",
    "Styled-Components",
    "Git",
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      className={styles.skills}
      slidesPerView={7}
      loop={true}
      freeMode
      mousewheel={{ releaseOnEdges: true }}
      autoplay
    >
      {skillTitles.map((skill, index) => {
        return (
          <SwiperSlide>
            <sup>{index}</sup>{skill}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
