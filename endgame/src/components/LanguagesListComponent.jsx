import { languages } from  '../languages.js';
import skullEmoji from "../assets/skull.jpg";

export default function LanguagesListComponent({wrongGuessCount}) {
    const styledLanguages = languages.map(
        (language, index) => {
            const styles = {
                backgroundColor: language.backgroundColor,
                color: language.color,
                opacity: wrongGuessCount > 0 ? 0.5 : 1
            };

            wrongGuessCount--;

            return wrongGuessCount < 0 ? (
                <div 
                    className="language-component-class" 
                    style={styles}
                    key={index}
                >
                    {language.name}
                </div>
            ) : (
                <img key={index} className="language-component-skull" src={skullEmoji} />
            )
        }
    );

    return (
        <div className='languages-list-class'>
            {styledLanguages}
        </div>
    )
}

export function languagesLength() {
    return languages.length;
}