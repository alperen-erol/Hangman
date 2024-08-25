import { useState } from "react";
import { HangmanStick } from "./HangmanStick";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import wordlist from "./wordList.json";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrecLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        losewin
      </div>
      <HangmanStick numberOfGuesses={incorrecLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
