import styles from "./Keyboard.module.css";

const keys = "abcdefghijklmnopqrstuvwxyz".split("");

export function Keyboard() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map((key) => {
        return (
          <button className={`${styles.btn}`} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
