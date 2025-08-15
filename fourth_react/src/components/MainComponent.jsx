import { useEffect, useState } from 'react';

export default function MainComponent() {
    const [memeState, setMemeState] = useState({
        topText: "",
        bottomText: "",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    });

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(data => setMemes(data.data.memes));
    }, []);
    
    function handleChange(event) {
        const {value, name} = event.currentTarget;
        setMemeState(prev => (
            name === "top-text" ? {...prev, topText:value} : {...prev, bottomText:value}
        ));
    }

    function getNewImage() {
        const randIndex = Math.floor(Math.random() * 100);

        setMemeState(prev => (
            {...prev, imgUrl: memes[randIndex].url}
        ))
    }

    return (
        <div className="main-class">
            <div className="inputs-class">
                <label> <span>Top Text</span>
                    <input 
                        name="top-text"
                        placeholder="Type something..."
                        onChange={handleChange}
                        value={memeState.topText}
                    />
                </label>

                <label> <span>Bottom Text</span>
                    <input 
                        name="bottom-text"
                        placeholder="Type something..."
                        onChange={handleChange}
                        value={memeState.bottomText}
                    />
                </label>
            </div>

            <button onClick={getNewImage}>Get a new meme image!</button>

            <div className="meme-image-class">
                <img src={memeState.imgUrl} />
                <span className="meme-image-top-text-class">{memeState.topText}</span>
                <span className="meme-image-bottom-text-class">{memeState.bottomText}</span>
            </div>
        </div>
    );
}