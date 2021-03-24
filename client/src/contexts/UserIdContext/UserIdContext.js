// TEST File
// Will move to database

import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserIdContext = createContext();

// type will be in custom claims
const profileDoctor = {
  type: 'doctor',
  firstName: 'Ash',
  lastName: 'Ketchum',
  email: 'ash@email.com',
};

const profilePatient = {
  type: 'patient',
  firstName: 'Misty',
  lastName: 'Kasumi',
  email: 'misty@email.com',
};

function SocketContextProvider({ children }) {
  const [userId, setUserId] = useState('');

  const id = uuidv4();
  // setUserId(id);

  useEffect(() => {
    console.log(`user id: ${id}`);
    setUserId(id);
  }, []);

  return (
    <UserIdContext.Provider value={{ userId, profileDoctor, profilePatient }}>
      {children}
    </UserIdContext.Provider>
  );
}

export default SocketContextProvider;
