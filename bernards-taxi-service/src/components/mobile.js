import React from 'react'
import './mobile.styles.css'

function Mobile () {
   return (
     <div>
       <img className = "logo" src = {require("../images/BTSLogo.jpg")} alt = "Zia logo with BTS inside"/>
       <h1>Bernards Taxi Service</h1>
       <h2>Providing reliable and certified taxi service in the Santa Fe area</h2>
     </div>
   )
}

export default Mobile;
