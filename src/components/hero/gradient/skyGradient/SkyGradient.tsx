import React, { useEffect } from "react";
import styles from "./SkyGradient.module.scss";
//7572ff
export default function SkyGradient() {
  return (
    <div className={styles.gradientContainer}>
      <div className={styles.gradient}>
        <div className={styles.blobs}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 634 785"
            className={styles.blob1}
          >
            <path fill="var(--blob1)">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values=" M0 0.499969H634C526 0.499969 502.5 64.5 363 178.5C223.5 292.5 305 244.8 177 302C49 359.2 1.66667 722.167 0 784.5V0.499969Z; M0 0H634C526 0 465.5 73.5 326 187.5C186.5 301.5 243 370.3 115 427.5C-13 484.7 1.66667 721.667 0 784V0Z; M0.00012207 0H634C526 0 574 87 434.5 201C295 315 246.5 312.3 118.5 369.5C-9.5 426.7 1.66679 721.667 0.00012207 784V0Z; M0 0.499969H634C526 0.499969 502.5 64.5 363 178.5C223.5 292.5 305 244.8 177 302C49 359.2 1.66667 722.167 0 784.5V0.499969Z "
              />
            </path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1644 316"
            className={styles.blob2}
          >
            <path fill="var(--blob2)">
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
        M1310 0H314C221.5 8.33333 -54.1 156.5 9.49999 216.5C89 291.5 251.5 165 424.5 203C597.5 241 816.5 84.5 967 110C1117.5 135.5 1024.5 216.5 1256 216.5C1303.67 204.333 1654 345.5 1519.5 141C1497.62 107.734 1348.67 9.5 1310 0Z;
        M1310 0.5H314C221.5 8.83333 -54.1 157 9.49999 217C89 292 135.5 141.5 353 233C570.5 324.5 561 116 711.5 141.5C862 167 1047 150 1211.5 107C1376 64 1654 346 1519.5 141.5C1497.62 108.234 1348.67 10 1310 0.5Z;
        M1310 0.5H314C221.5 8.83333 -54.0999 157 9.50012 217C89.0001 292 339 0.5 622 112.5C905 224.5 989 104.5 1139.5 130C1290 155.5 1202 203.5 1353 203.5C1504 203.5 1737.5 435.5 1603 231C1581.12 197.734 1348.67 10 1310 0.5Z;
        M1310 0.5H314C221.5 8.83333 -54.0999 157 9.50012 217C89.0001 292 438 105 721 217C1004 329 977.5 42.5 1128 68C1278.5 93.5 1202 203.5 1353 203.5C1504 203.5 1737.5 435.5 1603 231C1581.12 197.734 1348.67 10 1310 0.5Z;
        M1310 0H314C221.5 8.33333 -54.1 156.5 9.49999 216.5C89 291.5 251.5 165 424.5 203C597.5 241 816.5 84.5 967 110C1117.5 135.5 1024.5 216.5 1256 216.5C1303.67 204.333 1654 345.5 1519.5 141C1497.62 107.734 1348.67 9.5 1310 0Z
      "
              />
            </path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 719 793"
            className={styles.blob3}
          >
            <path fill="var(--blob3)">
              <animate
                attributeName="d"
                dur="9s"
                repeatCount="indefinite"
                values="
        M719 0H0C105.995 30.4 226.123 -2 274.409 115.5C322.696 233 305.851 273 446 290.5C586.149 308 707.812 765.5 719 792V0Z;
        M719 0.5H0C105.995 30.9 316.713 61 365 178.5C413.287 296 395.351 366.5 535.5 384C675.649 401.5 707.812 766 719 792.5V0.5Z;
        M719 0.5H0.00012207C105.995 30.9 277.713 10.5 326 128C374.287 245.5 437.851 451.5 578 469C718.149 486.5 707.812 766 719 792.5V0.5Z;
        M719 0H0C105.995 30.4 226.123 -2 274.409 115.5C322.696 233 305.851 273 446 290.5C586.149 308 707.812 765.5 719 792V0Z
      "
              />
            </path>
          </svg>

 
        </div>
      </div>
      <div className={styles.transition}></div>
    </div>
  );
}
