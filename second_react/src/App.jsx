import HeaderComponent from "./components/HeaderComponent.jsx";
import EntryComponent from "./components/EntryComponent.jsx";
import placesData from './LocationData.js';

export default function App(){
    const placesArray = placesData.map((entry) => {
        return (
            <EntryComponent 
                {...entry}
            />
        );
    })

    return (
        <>
            <HeaderComponent />
            {placesArray}
        </>
    );
};