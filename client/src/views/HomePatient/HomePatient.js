import React, { useContext } from 'react';

// TEST
import { UserIdContext } from 'contexts/UserIdContext';

function HomePatient() {
  // TEST
  const { profilePatient } = useContext(UserIdContext);

  return (
    <>
      <h1>
        Welcome
        {` ${profilePatient.firstName}`}
      </h1>

      <h3>
        Please go to
        {' '}
        <u>Check-In</u>
        {' '}
        in the menu.
      </h3>
    </>
  );
}

export default HomePatient;
