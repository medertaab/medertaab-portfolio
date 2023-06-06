import React from "react";
import styles from "./Skills.module.scss";
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
      className={styles.skillsContainer}
      slidesPerView={6}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
      {skillTitles.map((skill, index) => {
        return (
          <SwiperSlide>
            <div className={styles.skill} key={index}>
              <sup>{index}</sup>{skill}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
