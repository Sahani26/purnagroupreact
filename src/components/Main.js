 import React,{useState}from 'react'

 import '../style/test.css'
  
 
 export default function Main() {
    const [isActive, setIsActive] = useState(false);
  
    const toggleClass = () => {
      setIsActive(!isActive);
    };
   return (
    <div>
    <button onClick={toggleClass}>
      Toggle Class
    </button>
    <div className={isActive ? 'active' : 'inactive'}>
      This div's class will change!
    </div>
  </div>
   )
 }
 