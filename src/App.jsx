import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const [display, setDisplay] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated);
  }, [isAuthenticated]); 
  useEffect(() => {
    if (auth) {
      const adminEmail = 'admin@gmail.com';
      if (user?.email === adminEmail) {
        console.log('admin');
        setDisplay(false);
      } else {
        console.log('user');
        setDisplay(true);
      }
    } else {
      console.log('Not authenticated');
    }
  }, [auth, user?.email]); 

  return (
    <div className="app">
      <Home display={display} />
    </div>
  );
};

export default App;
