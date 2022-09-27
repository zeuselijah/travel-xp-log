/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
// eslint-disable-next-line no-unused-vars
function Main(props) {
  const [travel, setTravel] = useState(null);

  const API_URL = 'http://localhost:4000/api/travel/';

  const getData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTravel(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTravel = async (travel) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify(travel),
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index travel={travel} createTravel={createTravel} />}
        />
        <Route path="/travel/:id" element={<Show />} />
      </Routes>
    </main>
  );
}

export default Main;
