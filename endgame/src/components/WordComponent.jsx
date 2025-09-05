export default function WordComponent({word, guessedWord}) {
    let letters = [];
    for (let i = 0; i < word.length; i++){
        letters.push(
            <div 
                className="letter-component-class" 
                key={i}
            >
                {guessedWord.includes(word[i]) ? word[i] : ""}
            </div>
        )
    }

    return (
        <div className="word-component-class">
            {letters}
        </div>
    )
}