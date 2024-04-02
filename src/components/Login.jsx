import React, { useState } from 'react';
const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(username && password){
     onLogin();
     }else{
     alert('Please enter username and password');
     }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label>
                Username: <input type="text" value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>
            </label>
            <br />
            <label>
                Password: <input type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)}} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
export default Login;