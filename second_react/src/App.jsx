import HeaderComponent from "./components/HeaderComponent.jsx";
import EntryComponent from "./components/EntryComponent.jsx";
import placesData from './LocationData.js';
import React from "react";

function GetComponentsWithProps(){
    let components = [];

    for (const element in placesData){
        let ComponentInstance = <EntryComponent />;

        for (const [keyName, valueName] of Object.entries(placesData[element])){
            let data = {};
            data[keyName] = valueName;

            ComponentInstance = React.cloneElement(ComponentInstance, data);
        }
        
        console.log(ComponentInstance);
        components.push(ComponentInstance);
    }
    return components;
}

export default function App(){
    return (
        <>
            <HeaderComponent />
            {GetComponentsWithProps()}
        </>
    );
};