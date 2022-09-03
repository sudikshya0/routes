import React from "react";
import places from '../data/places.json'
import './styles.css'
import PlaceItem from "./placeItem";

const Places = () => {
    console.log("places", places);
    return (
        <div className="main__container">
            {places.map((item, index) => (
                <PlaceItem item={item} key={index} />
            ))}
        </div>
    )
}
export default Places;
