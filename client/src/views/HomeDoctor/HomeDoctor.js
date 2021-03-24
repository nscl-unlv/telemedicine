import React, { useContext } from 'react';

// TEST
import { UserIdContext } from 'contexts/UserIdContext';

function HomeDoctor() {
  // TEST
  const { profileDoctor } = useContext(UserIdContext);

  return (
    <>
      <h1>
        Welcome Dr.
        {` ${profileDoctor.lastName}`}
      </h1>

      <h3>
        Please go to
        {' '}
        <u>Call-Room</u>
        {' '}
        in the menu to see checked-in patients.
      </h3>
    </>
  );
}

export default HomeDoctor;
