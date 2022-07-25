import React from 'react'
import './desktop.styles.css'

function Desktop () {
   return (
      <div className = "desktop">
        <div id = "menuHeader">
          <h3>Booking</h3>
          <h3>Availability</h3>
          <h3>Locations</h3>
        </div>
       <img className = "logo" src = {require("../images/DesktopBTSBanner.jpg")} alt = "Zia logo with BTS inside"/>
       <h1>Bernards Taxi Service</h1>
       <a>Providing reliable and certified airport transportation service in Santa Fe and more!</a>
       <div className = "row">
        <div className = "column">
          <h2> Locations</h2>
          <div className = "center">
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
        </div>
        <div className = "column">
          <h2>Booking</h2>
          <a>Please call or text for reservations at: </a>
          <a><b>Bernard:</b> 505-550-9901</a>
          <a><b>Preety:</b> 505-310-5344</a>
          <h2>Availability</h2>
          <a><b>Monday through Friday:</b> 6am - 11pm</a>
          <a><b>Saturday:</b>8am - 1am</a>
          <a><b>Sunday:</b>8am - 10pm</a>
        </div>
       </div>
       <div className = "footer">
       </div>
     </div>
   )
}

export default Desktop;
