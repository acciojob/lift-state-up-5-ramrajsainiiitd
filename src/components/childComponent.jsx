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

  function handleSubmit(e) {
    e.preventDefault();
    props.parentStateSetter(e.target.value);
  }

if (props.isLoggedIn == false) {
  return ( 
    <>
      <h2>Child Component</h2>
        <form onSubmit={handleSubmit} value={true}>
        <label htmlFor="username">Username: </label>
        <input type='text' id="username" value={userName} onChange={handleUserName} placeholder="Type Username" required /><br/>
        <label htmlFor="password">Password: </label>
        <input type='password' id="password" value={password} onChange={handlePassword} placeholder="Type Password" required/><br/>
        <button >Login</button>
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