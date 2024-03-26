import React, { useState } from 'react'; 

export default function ChildComponent(props) {
  const [userName, setUserName] = useState(''); 
  const [password, setPassword] = useState(''); 

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    props.parentStateSetter(e.target.value);
  }

if (props.isLoggedIn == false) {
  return ( 
    <>
      <h2>Child Component</h2>
        <form>
        <label htmlFor="username">Username: </label>
        <input type='text' id="username" value={userName} onChange={handleUserName} placeholder="Type Username" /><br/>
        <label htmlFor="password">Password: </label>
        <input type='password' id="password" value={password} onChange={handlePassword} placeholder="Type Password"/><br/>
        <button onClick={handleClick} value={true} >Login</button>
      </form>
    </>
  );
}
else{
  return (
<>
<h2>Child Component</h2>
<p>You are logged in!</p>
</>
  )
}

}