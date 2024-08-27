
import React from 'react';
import './Work1.css';


export default class Work1 extends React.Component {  
 
  render() {  
    return (  
      <div>  
        <input type='text'  onChange={(e)=>{document.getElementById('result').innerText=e.target.value;}}  />
        <p id="result"></p>
        </div>
    );
}}
