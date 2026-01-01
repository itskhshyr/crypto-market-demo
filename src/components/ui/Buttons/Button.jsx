'use client'
import Spinner from "../Spinner";
import styles from "./Button.module.css";
export default function Button({ content, type, loading }) {
  return (
    <>
      <button type={type} disabled={loading} className={styles.buttonState}>
        {loading ? <Spinner />  : content}
      </button>
    </>
  );
}
