import React, { useRef } from "react";
import styled from "../About.module.scss";
import { delay, motion, useInView } from "framer-motion";

interface TechObject {
  title: string;
  path: string;
}

const data = [
  { title: "JavaScript", path: "js.jpg" },
  { title: "TypeScript", path: "ts.jpg" },
  { title: "React", path: "react.jpg" },
  { title: "Sass", path: "sass.jpg" },
  { title: "Styled-Components", path: "sc.png" },
  { title: "Tailwind", path: "tailwind.png" },
  { title: "Next.js", path: "nextjs.jpg" },
  { title: "Vite", path: "vite.png" },
];

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styled.stackContainer} ref={ref}>
      {data.map((object: TechObject, index: number) => {
        return (
          <motion.img
            src={`/icons/${object.path}`}
            alt={object.title}
            key={index}
            style={
              {
                opacity: isInView ? 1 : 0,
              } as React.CSSProperties
            }
            animate={isInView && {y: [0, -15, 0],}}
            transition={{delay: index*0.1}}
          />
        );
      })}
    </div>
  );
}
