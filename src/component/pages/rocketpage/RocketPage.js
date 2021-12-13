import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './rocket.css';
import Rocket from './Rocket';
import { cancelReservation, getRockets, reserveRockets } from '../../../redux/rocket/rocket';

const RocketPage = () => {
  const dispatch = useDispatch();

  const allRockets = useSelector((state) => state.rocket);

  const handleReservation = (e, id) => {
    if (e.target.innerHTML === 'reserve rocket') {
      e.target.innerHTML = 'cancel reservation';
      dispatch(reserveRockets(id));
    } else {
      e.target.innerHTML = 'reserve rocket';
      dispatch(cancelReservation(id));
    }
  };

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rocket-page d-flex a-center j-center f-col">
      {allRockets.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          name={item.rocketName}
          image={item.image}
          description={item.description}
          reserved={item.reserved}
          buttonHandler={(e) => handleReservation(e, item.id)}
        />
      ))}
    </div>
  );
};
export default RocketPage;
