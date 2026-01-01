"use client";
import styles from "./CircleButton.module.css";
import Image from "next/image";

export default function CircleButton({ Link, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.circleButton}
    >
      <Image src={Link} width={18} height={18} alt="arrow-icon" />
    </button>
  );
}
