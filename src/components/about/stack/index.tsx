import React, { useRef } from "react";
import styled from "../About.module.scss";
import { motion, useInView } from "framer-motion";
import techStack from "@component/data/techStack";

interface TechObject {
  title: string;
  path: string;
}

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styled.stackContainer} ref={ref}>
      {techStack.map((object: TechObject, index: number) => {
        return (
          <motion.img
            src={`/icons/${object.path}`}
            alt={object.title}
            key={index}
            animate={isInView && {scale: [1, 1.2, 1]}}
            transition={{delay: index*0.1}}
          />
        );
      })}
    </div>
  );
}
