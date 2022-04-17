import React, {useContext, useEffect, useState} from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import logo from '../pictures/logo_bundes.png';
import $ from 'jquery';


$(document).ready(function(){
  $(".dropdown-trigger").dropdown();
  $('.parallax').parallax();
  $('.sidenav').sidenav(); 
  });

export const WerkstattPage = () => {
  return (
   
<body>
  <div>
    <div class="navbar-fixed">
          <nav>
              <div class="nav-wrapper">
                <div class="container" >
                  <a href="#" class="brand-logo" ><img src={logo} height="40" width="55" alt="logo"/></a>
                  <a href="#" data-target="sidenav-list" class="sidenav-trigger"><i class="material-icons">menu</i></a>    
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a  href="./">Hauptseite</a></li>
                  </ul>
                </div>
              </div>
            </nav>           
        </div>
        <ul class="sidenav" id="sidenav-list">
        <li><a href="./"><span class= "name white-text">Hauptseite</span></a></li>  
      </ul>
    </div>

      <div  className="wellcome">
        <div  class="container">   
              <div  class="row">     
                <div  class="col xl12 l12 m8 s12 center-align" >
                  <div  class="main-text-wellcome" >
                    <h5>Die beste Werkstatt im Region Stuttensee: </h5>
                    <LoremIpsum p={5} />
                  </div>
                </div>
              </div>
          </div>
      </div>
   

    <footer>
        <div class="container" height="20px">            
          <div class="row">
          <div class="col xl4 l4 m6 s12 center-align">
              <h6 class="white-text" href="#!">Kontakt</h6>
            
            </div>

            <div class="col xl4 l4 m6 s12 center-align">
              <h6 class="white-text" href="#!">Impressum</h6>
           
            </div>
  
            <div class="col xl4 l4 m6 s12 center-align">
              <h6 class="white-text" href="#!">Datenschutz</h6>
             
            </div>

            <div class="copyrightText" > © 2022 Copyright Dienstleistungen GRAV</div>
          </div>
        </div>
    </footer>
  </body>         
  )
}
