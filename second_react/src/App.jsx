import HeaderComponent from "./components/HeaderComponent.jsx";
import EntryComponent from "./components/EntryComponent.jsx";
import placesData from './LocationData.js';
import React from "react";

function GetComponentsWithProps(){
    let components = [];

    for (const element in placesData){
        let ComponentInstance = <EntryComponent />;

        for (const [k, value] of Object.entries(element)){
            React.cloneElement(ComponentInstance, {k: value});
        }

        components.push(ComponentInstance);
    }

    return components;
}

export default function App(){
    console.log(placesData);

    return (
        <>
            <HeaderComponent />
            {GetComponentsWithProps()}
        </>
    );
};