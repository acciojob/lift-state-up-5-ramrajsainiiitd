import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 return (
  <>
  <ChildComponent isLoggedIn = {isLoggedIn} parentStateSetter = {setIsLoggedIn} />
  </>
 )
 
}

export default App;
