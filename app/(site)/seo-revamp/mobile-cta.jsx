"use client";

import { useEffect, useState } from "react";
import styles from "./seo-revamp.module.css";

export default function MobileCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("start");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a className={`${styles.mobileCta} ${hidden ? styles.mobileCtaHidden : ""}`} href="#start" aria-hidden={hidden} tabIndex={hidden ? -1 : 0}>
      <span>Free audit over coffee</span>
      <b>Book →</b>
    </a>
  );
}
