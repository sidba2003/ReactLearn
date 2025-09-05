import HeaderComponent from "./components/HeaderComponent";
import GameStateComponent from "./components/GameStateComponent";
import LanguagesListComponent, { languagesLength } from "./components/LanguagesListComponent";
import WordComponent from "./components/WordComponent.jsx";
import KeyboardComponent from "./components/KeyboardComponent.jsx";
import { useState } from "react";

const alphabets = "abcdefghijklmnopqrstuvwxyz";

const keyObjects = [];
for (let i = 0; i < alphabets.length; i++){
    keyObjects.push(
        {
            letter: alphabets[i],
            isUsed: false,
            isRight: true
        }
    )
}

export default function App() {
    const [keyboardLetters, setKeyboardLetters] = useState(keyObjects);
    const [currentWord, setCurrentWord] = useState("react");
    const [guessedWord, setGuessedWord] = useState([]);
    const [wrongGuessCount, setWrongGuessCount] = useState(0);
    
    const showGameState = (wrongGuessCount === languagesLength()) || (guessedWord.length === currentWord.length);

    function checkLetterUsed(letter){
        const letterData = keyboardLetters.filter(elem => elem.letter === letter)[0];
        return letterData === letter;
    }

    function setLetterObjectUsedTrue(letter){
        let auxLetters = [...keyboardLetters];
        for (let i = 0; i < auxLetters.length; i++) {
            if (auxLetters[i].letter === letter){
                auxLetters[i].isUsed = true;
                break;
            }
        }
        setKeyboardLetters(auxLetters);
    }

    function setLetterObjectState(letter, state){
        let auxLetters = [...keyboardLetters];
        for (let i = 0; i < keyboardLetters.length; i++) {
            if (keyboardLetters[i].letter === letter){
                keyboardLetters[i].isRight = state;
                break;
            }
        }
        setKeyboardLetters(auxLetters);
    }

    function guessedLetter(event){
        const letter = event.target.value;

        if (showGameState) return;
        
        if (checkLetterUsed(letter) || wrongGuessCount === 9) return;

        const newWord = [...guessedWord, letter];

        if (newWord.length > currentWord.length) return;

        setLetterObjectUsedTrue(letter);

        if (!(currentWord.includes(letter))){
            setWrongGuessCount(prev => prev + 1);
            setLetterObjectState(letter, false);
        } else {
            setGuessedWord(newWord);
            setLetterObjectState(letter, true);
        }
    }

    return (
        <>
            <HeaderComponent />

            {showGameState ? 
                <GameStateComponent 
                    gameWon={guessedWord.length === currentWord.length}
                /> 
                : 
                null
            }

            <LanguagesListComponent 
                wrongGuessCount={wrongGuessCount}
            />

            <WordComponent 
                word={currentWord} 
                guessedWord={guessedWord}
            />

            <KeyboardComponent 
                guessedLetter={guessedLetter}
                keyboardLetters={keyboardLetters}
            />

            <button className="new-game-button">
                New Game
            </button>
        </>
    )
}