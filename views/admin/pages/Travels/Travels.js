import React, { useState, useEffect } from 'react';
import request from '../../../../utils/request';
import TravelsTable from './TravelsTable';
import NewTravel from './NewTravel/NewTravel';
import useToggle from '../../../../utils/useToggle';

const Travels = (props) => {
  const initialData = {
    username: '',
    password: '',
    email: '',
    fullname: '',
    roles: [],
  };

  const [travelList, setTravelList] = useState({ data: [], isFetching: false });
  const [userData, setUserData] = useState(initialData);
  const [userUpdate, setUserUpdate] = useState(false);
  const [isOpen, toggleOpen] = useToggle(false);
  let isMount = true;

  const fetchTravels = async () => {
    if (isMount) setTravelList({ data: [], isFetching: true });
    try {
      const res = await request('/api/travels/', 'get');
      console.log('res', res);
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
    <React.Fragment>
      <div>
        {/* <NewTravel
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        /> */}
        <div>
          <TravelsTable
            {...props}
            travelList={travelList}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Travels;
