import React from "react";
import { useState } from 'react';
import "./Sign.css";

 export default function Signup(){
  const [input, setInput] = useState('');
   return(
    <div>
    
      
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
       
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input><br />
       
      <input type="password" id="lname" name="lastname" placeholder="password"></input><br />
      <input type="email" id="email" name="email" placeholder="email"></input><br />
      
      <label >Date of birth</label><br />

      <input type="date" id="date" name="trip-start"
       value={input}
       onInput={e => setInput(e.target.value)}
       onChange={(e) => { console.log(e.target.value); }}
       min="1990-01-01" max="2020-12-31"></input><br />

      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">india</option>
      </select><br />
    
      <input type="submit" value="Submit"></input>
    
  </div>
   )
 }