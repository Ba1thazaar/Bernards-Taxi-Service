import React from 'react'
import './mobile.styles.css'

function Mobile () {
   return (
     <div className = "mobile">
       <img className = "logo" src = {require("../images/MobileBTSBanner.jpg")} alt = "Zia logo with BTS inside"/>
       <div className = "Section">
         <h1>Bernards Taxi Service</h1>
         <h3>Providing reliable and certified airport transportation service in and around Santa Fe!</h3>
       </div>
       <h2>Locations</h2>
       <div className = "Section">
         <ul>
           <li>Albaquerque Airport </li>
           <li>Santa Fe Airport</li>
           <li>Taos Airport and Taos Pueblo</li>
           <li>Los Alamos</li>
           <li>Meow Wolf</li>
           <li>10,000 Waves Spa</li>
           <li>Ojo Spa and Hotsprings</li>
           <li>Bandelier National Monument</li>
           <li>Ghost Ranch</li>
           <li>Georgia O'Keefe Museum</li>
           <li>Tent Rocks National Monument</li>
           <li>Santuario De Chimayo</li>
         </ul>
       </div>
       <div className = "Section">
       <h2>Booking</h2>
         <a>Please call or text for reservations at: </a>
         <b>Bernard:</b><a href="tel:505-550-9901"> 505-550-9901</a>
         <b>Preety:</b> <a href="tel:505-310-5344"> 505-310-5344</a>
       </div>
       <div className = "Section">
         <h2>Availability</h2>
         <a><b>On Call Hours:</b>  5 am to 11pm</a>
         <a>Reservations available 24/7</a>
       </div>
     </div>
   )
}

export default Mobile;
