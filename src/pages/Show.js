/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Show({ travel }) {
  const { id } = useParams();
  const trip = travel ? travel.find((t) => t._id === id) : null;

  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  const loaded = () => {
    return (
      <section>
        <div className="show-img-container">
          <img src={trip.image} alt={trip.location} />
        </div>
        <h3>Location: {trip.location} </h3>
        <h3>Description: {trip.description}</h3>
        <h3>Cost: {trip.cost}</h3>
        <h3>Places to visit: {trip.visit}</h3>
      </section>
    );
  };

  return travel ? loaded() : loading();
}

export default Show;
