import styles from "./Keyboard.module.css";

const keys = "abcdefghijklmnopqrstuvwxyz".split("");

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
              ${isInactive ? styles.inactive : ""}
              `}
            disabled={isInactive || isActive}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
