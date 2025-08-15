import { use } from "react";
import DiceComponent from "./DiceComponent.jsx";
import { useState } from 'react';
import Confetti from 'react-confetti';

export default function App() {
    const generateRandomValues = () => {
        return new Array(10)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6 + 1))
    }

    const [diceValues, setDiceValues] = useState(
        generateRandomValues()
            .map((num, index) => (
                {value: num, isHeld: false, key:index}
            ))
    )

    const [gameCompletion, setGameCompletion] = useState(false);

    const dices = diceValues.map(
        element => (
            <DiceComponent 
                value={element.value} 
                id={element.key} 
                key={element.key}
                isHeld={element.isHeld}
                changeState={changeDiceHeldState}
            />
        )
    )

    function checkValues(){
        let sum = 0;
        for (let ind in diceValues){
            sum += diceValues[ind].value;

            if (diceValues[ind].isHeld === false) return false;
        }

        if ((sum / 10) != diceValues[0].value) return false;

        return true;
    }

    function reRollDice() {
        const randomNumbers = generateRandomValues();
        let index = 0;

        const auxDice = [...diceValues];

        for (let ind in auxDice){
            if (!auxDice[ind].isHeld){
                auxDice[ind].value = randomNumbers[index];
                index++;
            }
        }

        setDiceValues(auxDice);
    }

    function changeDiceHeldState(id){
        const auxDice = [...diceValues];

        for (let ind in auxDice){
            if (auxDice[ind].key === id){
                auxDice[ind].isHeld = !auxDice[ind].isHeld

                setDiceValues(auxDice);
                break;
            }
        }

        const response = checkValues();
        setGameCompletion(response);
    }

    function restartGame(){
        setDiceValues(
            generateRandomValues()
                .map((val, index) => ({value: val, isHeld: false, key:index}))
        )

        setGameCompletion(false);
    }

    return (
        <main>
            { gameCompletion && <Confetti /> }
            <div className="dice-grid-class">
                {dices}
            </div>
            <div className="reroll-dice-class">
                <button onClick={gameCompletion ? restartGame : reRollDice}><span>{gameCompletion ? "New Game" : "Roll"}</span></button>
            </div>
        </main>
    );
}