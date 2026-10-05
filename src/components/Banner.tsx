'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./banner.module.css";

const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <section className={styles.banner} onClick={() => setIndex((index + 1) % covers.length)}>
      <Image
        className={styles.background}
        src={covers[index]}
        alt="Venue Explorer banner"
        fill
        sizes="100vw"
        preload
      />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <p className={styles.kicker}>Venue Explorer</p>
        <h1 className={styles.headline}>where every event finds its venue</h1>
        <p className={styles.lead}>
          Browse ballrooms, rooftop terraces, and private dining rooms across the
          city, compare capacity and catering packages, then reserve your date
          online in a few minutes.
        </p>
      </div>
      <button
        className={styles.selectButton}
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </section>
  );
}
