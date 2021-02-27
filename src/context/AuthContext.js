import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, []);

  return (
    <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.children}
    </AuthContext.Provider>
  );
};
