import { useRef } from "react";
import styles from "./SectionTitle.module.scss";
import Star from "@public/svg/star-medium.svg?react";
import { useInView } from "framer-motion";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.titleContainer}>
      <h3 ref={ref}>{children}</h3>
      <Star
        className={styles.star}
        style={{
          display: isInView ? "block" : "none",
        }}
      />
    </div>
  );
}
