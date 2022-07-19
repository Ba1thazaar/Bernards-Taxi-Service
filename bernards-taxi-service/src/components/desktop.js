import React from 'react'
import './desktop.styles.css'

function Desktop () {
   return (
     <div>
       <img className = "logo" src = {require("../images/BTSLogo.jpg")} alt = "Zia logo with BTS inside"/>
       <h1>Bernards Taxi Service</h1>
     </div>
   )
}

export default Desktop;
