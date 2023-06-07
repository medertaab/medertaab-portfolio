import React from "react";
import styles from "./Gradient.module.scss";

export default function Gradient() {
  return (
    <div className={styles.gradient}>
      <div className={styles.blobs}>
        <div className={styles.blob1Container}>
          <svg
            className={styles.blob1}
            viewBox="0 0 578 356"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path>
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M110.218 208.148C2.18453 132.946 -6.43618 38.0486 2.75764 0.00012636L406.092 0C406.092 0 518.948 35.4783 521.812 92.4336C524.702 149.91 607.13 276.068 567.012 301.434C510.416 332.768 218.251 283.349 110.218 208.148Z;
                
                M149.5 127.5C27.5 100.5 -7.43615 38.0486 1.75768 0.00012636L405.092 0C405.092 0 517.949 35.4783 520.812 92.4336C523.702 149.91 684.5 399 451 349.5C256 265 278.021 155.943 149.5 127.5Z;

                M160 200C38 173 -7.43618 38.0486 1.75765 0.00012636L405.092 0C405.092 0 517.949 35.4783 520.812 92.4336C523.702 149.91 713.5 254 493.5 296.5C225.456 348.281 240 217.705 160 200Z;

                M110.218 208.148C2.18453 132.946 -6.43618 38.0486 2.75764 0.00012636L406.092 0C406.092 0 518.948 35.4783 521.812 92.4336C524.702 149.91 607.13 276.068 567.012 301.434C510.416 332.768 218.251 283.349 110.218 208.148Z;
                "
              >

              </animate>
            </path>
          </svg>
        </div>

        <svg
          className={styles.blob2}
          viewBox="0 0 768 570"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M210.581 170.727C163.785 66.5455 65.2999 20.9091 0 0H768V570C752.86 535.455 669.161 498.861 557.419 458.727C445.677 418.594 257.376 274.909 210.581 170.727Z" />
        </svg>
      </div>

      <div className={styles.lights}>
        <svg
          className={styles.light1}
          viewBox="0 0 465 366"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M417.405 247.071C504.355 145.886 450.155 40.4645 412.186 0.401838L0.197347 59.4975C33.3614 495.919 308.718 373.552 417.405 247.071Z" />
        </svg>

        <svg
          className={styles.light2}
          viewBox="0 0 499 427"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M494.106 409.355C516.688 313.36 463.308 108.893 120.635 28.2808L0.989647 0.134738C179.541 181.168 471.523 505.35 494.106 409.355Z" />
        </svg>

        <svg
          className={styles.light3}
          viewBox="0 0 676 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M579.588 199.077C729.466 127.697 671.74 36.6174 624.143 0H3.05058C-40.4313 354.981 392.24 288.302 579.588 199.077Z" />
        </svg>

        <svg
          className={styles.light4}
          viewBox="0 0 288 104"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M115.055 103.08C28.1143 93.8478 2.2116 30.9503 0.127838 0.65564H287.687C266.368 38.6442 201.996 112.313 115.055 103.08Z" />
        </svg>

        <svg
          className={styles.light5}
          viewBox="0 0 338 241"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 240.532C219.343 250.964 316.726 84.5242 338 0H0V240.532Z" />
        </svg>
      </div>
    </div>
  );
}
