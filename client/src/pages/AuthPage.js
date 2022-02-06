/* eslint-disable no-undef */
import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
//import M from 'materialize-css';
//import MenuIcon from 'material-design-icons'
import logo from '../pictures/logo_bundes.png';
import grav_pic_2 from '../pictures/bmw.jpg';
import $ from 'jquery';


$(document).ready(function(){
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('.parallax').parallax(); 
  });
  
// $(document).ready(function(){
//   $(".dropdown-trigger").dropdown();
//   });

export const AuthPage = () => {

return (

<body className="background">
  
    <div class="navbar-fixed">
        
    <ul id="dropdown1" class="dropdown-content">
                      <li><a href="#!">Inspektion</a></li>
                      <li><a href="#!">Reifenservice</a></li>
                      <li class="divider"></li>
                      <li><a href="#!">Lichteinstellung</a></li>
                      <li><a href="#!">Motor-Reparaturen</a></li>
                      <li><a href="#!">Getriebe-Reparaturen</a></li>
                      <li><a href="#!">Spureinstellung</a></li>
                  </ul>
          <nav>
              <div class="nav-wrapper">
                <div class="container" >
                  <a href="#" class="brand-logo" ><img src={logo} height="40" width="55" alt="logo"/></a>
                  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>    
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Willkommen</a></li>
                    <li><a href="#">Werkstatt</a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dienstleistungen<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li><a href="#">Termin buchen</a></li>                   
                  </ul>
                  
                  <ul class="sidenav" id="slide-out">
                    <li><a href="#">Willkommen</a></li>
                    <li><a href="#">Werkstatt</a></li>
                    <li><a href="#">Dienstleistungen</a></li>
                    <li><a href="#">Termin buchen</a></li>
                   </ul>
                </div>
              </div>
            </nav>           
        </div>
    

      <div  class="container"  >   
        <div  class="row" >     
         
          <div  class="col xl4 l4 m6 s12 center-align" >
            <div  class="main-text" >
              <h5>Buchen Sie ein Termin: </h5>
              <p>Auto kaputt? Du mir bringen, nix mehr kaputt!</p>
            </div>
           
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align" >
          <div  class="main-text" >
              <h5>Meisterwerkstatt</h5>
              <p>Auto kaputt? Du mir bringen, nix mehr kaputt!</p>
              </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align">
          <div  class="main-text" >
              <h5>Moderne Ausstattung jeglicher Art</h5>
              <p>Auto kaputt? Du mir bringen, nix mehr kaputt!</p>
              </div>
          </div>
        </div>
    </div>

{/* <div class="parallax-container">
    <div class="parallax">
        <img src={grav_pic_2} alt=""/>
    </div>
  </div>

  <div class="section white">
    <div class="row container">
          <h5 class="header">Parallax</h5>
          <p class="grey-test text-darken-3 lighten-3"> </p>
     </div>
  </div>

  <div class="parallax-container">
    <div class="parallax">
        <img src={grav_pic_2} alt=""/>
    </div>
  </div> */}


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

//<i class="material-design-icons">menu</i>
//<menu>menu</menu>
//class="page-footer"
//<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
/*<div class="col l3 s12">
<h5 class="white-text">Impressum</h5>
<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</div>

<div class="col l3 s12">
<h5 class="white-text">Impressum</h5>
<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</div>
*/

//class="container"class="container"
//class="container"

//className="background"