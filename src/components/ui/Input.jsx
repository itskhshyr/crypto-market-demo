import styles from "./Input.module.css";

export default function Input({
  type,
  placeholder,
  name,
  handleChange,
  value,
}) {
  return (
    <>
      <input
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        className={` ${styles.InputState}`}
        type={type}
      />
    </>
  );
}
