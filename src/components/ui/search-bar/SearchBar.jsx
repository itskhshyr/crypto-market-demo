import React from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";

export default function SearchBar({ value, onChange, className = "" }) {
  return (
    <div
      className={`px-3 flex-fill d-flex align-items-center justify-content-end ${className}`}
    >
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Search by coin name..."
          className={styles.searchInput}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className={styles.icon}>
          <Image
            src="/images/icons/MagnifyingGlass.svg"
            width={16}
            height={16}
            alt="icon"
          />
        </span>
      </div>
    </div>
  );
}
