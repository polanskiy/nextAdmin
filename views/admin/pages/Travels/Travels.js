import React, { useState, useEffect } from 'react';
import request from '../../../../utils/request';
import TravelsTable from './TravelsTable';
import NewTravel from './NewTravel/NewTravel';

const Travels = (props) => {
  const [travelList, setTravelList] = useState({ data: [], isFetching: false });
  let isMount = true;

  const fetchTravels = async () => {
    if (isMount) setTravelList({ data: [], isFetching: true });
    try {
      const res = await request('/api/travels/', 'get');
      if (isMount) setTravelList({ data: res.data, isFetching: false });
    } catch (e) {
      if (isMount) setTravelList({ data: [], isFetching: false });
    }
  };

  useEffect(() => {
    fetchTravels();
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="adminTitle">Путешествия:</h1>
        <NewTravel travelList={travelList.data} fetchTravels={fetchTravels} />
        <div className="adminPageElement">
          <TravelsTable
            {...props}
            travelList={travelList}
            fetchTravels={fetchTravels}
          />
        </div>
      </div>
    </>
  );
};
export default Travels;
