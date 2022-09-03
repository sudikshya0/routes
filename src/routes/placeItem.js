import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceItem = (props) => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/place/${props.item.id}`, {
          state: props.item,
        });
      }}
      className="place__container"
    >
      <img className="place__image" src={props.item.image} />
      <div className="place__name">{props.item.name}</div>
      <div className="place__date">{props.item.date}</div>
      </div>
  );
};

export default PlaceItem;