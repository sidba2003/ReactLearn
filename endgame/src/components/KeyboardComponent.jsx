import clsx from 'clsx';

export default function KeyboardComponent({guessedLetter, keyboardLetters}) {

    let keyBoardKeys = [];

    for (let i = 0; i < keyboardLetters.length; i++){
        keyBoardKeys.push(
            <button 
                value={keyboardLetters[i].letter}
                onClick={guessedLetter} 
                className={clsx({
                    ["keyboard-letter-class"]: true,
                    ["keyboard-letter-class-not-used"] : !keyboardLetters[i].isUsed,
                    ["keyboard-letter-class-wrong"] : keyboardLetters[i].isUsed && !keyboardLetters[i].isRight,
                    ["keyboard-letter-class-right"] :  keyboardLetters[i].isUsed && keyboardLetters[i].isRight,
                })}
                key={keyboardLetters[i].letter}
            >
                {keyboardLetters[i].letter}
            </button>
        );
    }

    return (
        <div className="keyboard-class">
            {keyBoardKeys}
        </div>
    );
}