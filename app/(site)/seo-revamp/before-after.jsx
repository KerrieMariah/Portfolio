"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./seo-revamp.module.css";

export default function BeforeAfter() {
  const [position, setPosition] = useState(54);

  return (
    <div className={styles.compare} style={{ "--pos": `${position}%` }}>
      <div className={styles.browserBar} aria-hidden="true">
        <i /><i /><i />
        <span>yourbusiness.com</span>
      </div>

      <div className={styles.compareStage}>
        <div className={styles.afterLayer}>
          <Image
            src="/images/portfolio/empire-garage-doors.png"
            alt="A modern website revamp for a Naples garage door company"
            fill
            sizes="(max-width: 1000px) 92vw, 1000px"
          />
          <span className={`${styles.compareTag} ${styles.compareTagAfter}`}>After</span>
        </div>

        <div className={styles.beforeLayer} aria-hidden="true">
          <div className={styles.oldSite}>
            <div className={styles.oldHeader}>
              <b>ACME SERVICES INC.</b>
              <span>Home | About | Services | Contact Us</span>
            </div>
            <div className={styles.oldBody}>
              <h4>Welcome To Our Website!!</h4>
              <div className={styles.oldImage}>image coming soon</div>
              <p>We are a family owned business serving the area since 1998. Please call us for more information about our services and pricing. Thank you for visiting.</p>
              <p className={styles.oldCounter}>Visitors: 000412</p>
            </div>
          </div>
          <span className={`${styles.compareTag} ${styles.compareTagBefore}`}>Before</span>
        </div>

        <div className={styles.compareHandle} aria-hidden="true"><span>‹ ›</span></div>

        <input
          className={styles.compareRange}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Drag to compare the old website with the revamped website"
        />
      </div>
    </div>
  );
}
