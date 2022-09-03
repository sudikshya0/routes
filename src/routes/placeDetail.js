import React from 'react';
import {useLocation} from "react-router-dom";
const PlaceDetail=()=>{
    const {state} = useLocation();
    console.log("state",state);

    return(
    <div>
        <img src={state.image}/>
        <div>{state.name}</div>
        <div>{state.date}</div>
        <div>{state.detail}</div>
    </div>
    );
}
export default PlaceDetail