import React, { useState } from 'react';
import Login from './Login';
const ParentComponent = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin=()=>{
        setIsLoggedIn(true);
    };
  return (
   <div className='welcome-message'>
    <h1>Parent Component</h1>
    {
        isLoggedIn ? (<p>You are logged in!</p>) : (<Login onLogin={handleLogin}/>)
    }
   </div>
  )
}
export default ParentComponent;