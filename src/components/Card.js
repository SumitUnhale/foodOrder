import React from 'react';

const Card = ({ restaurant }) => {
  if (!restaurant?.info) return null;

  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwo,
    cuisines = [],
    locality,
  } = restaurant.info; 

  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="card-img"
      />
      <div className="res-name">{name}</div>
      <div className="res-descr">⭐ {avgRating}</div>
      <div className="res-descr">{sla?.slaString}</div>
      <div className="res-descr">{costForTwo}</div>
      <div className="res-descr sumary">{cuisines[0] || "Various cuisines"}</div>
      <div className="res-descr sumary">{locality}</div>
    </div>
  );
};

export default Card;
