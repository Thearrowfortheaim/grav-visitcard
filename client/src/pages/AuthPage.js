/* eslint-disable no-undef */
import React, {useContext, useEffect, useState} from 'react'
// import {LoremIpsum } from 'react-lorem-ipsum';
// import {useHttp} from '../hooks/http.hook'
// import {useMessage} from '../hooks/message.hook'
// import {AuthContext} from '../context/AuthContext'
// import {Link} from "react-router-dom";
import logo from '../pictures/logo_bundes.png';
import grav_backgr from '../pictures/grav_background.jpg';
import bmw_pic from '../pictures/bmw.jpg';
import grav_2_pic from '../pictures/wellcome.jpg';
import korabl2 from '../pictures/korabl2.jpg';
import $ from 'jquery';

$(document).ready(function(){
  $(".dropdown-trigger").dropdown();
  $('.parallax').parallax();
  $(".sidenav").sidenav();
  });
 
export const AuthPage = () => {
return (
//className="background"
<body >
  <div>
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
                  <div class="container">
                    <a href="./wellcome" class="brand-logo" ><img src={logo} height="40" width="55" alt="logo"/></a>
                    <a href="#" class="sidenav-trigger" data-target="sidenav-list" ><i class="material-icons">menu</i></a>    
                    
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                      <li><a  href="./wellcome">Willkommen</a></li>
                      <li><a href="./werkstatt">Werkstatt</a></li>
                      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dienstleistungen<i class="material-icons right">arrow_drop_down</i></a></li>
                      <li><a href="./termin">Termin buchen</a></li>                   
                    </ul>
                  </div>
                </div>
              </nav>  
        </div>

        <ul class="sidenav" id="sidenav-list">
                        <li><a href="./wellcome" ><span class= "name white-text">Willkommen</span></a></li>            
                        <li><a href="./werkstatt"><span class= "name white-text">Werkstatt</span></a></li>
                        <li><a href="./termin"><span class= "name white-text">Termin buchen</span></a></li> 
                        <li><a href="./"><span class= "name white-text">Hauptseite</span></a></li>         
        </ul>       
    </div>
    
    <div class="parallax-container">
      <div class="parallax">
          <img src={grav_backgr} alt=""/>
      </div>
    </div>

    <div  class="container">   
        <div  class="row">     
          <div  class="col xl4 l4 m6 s12 center-align" >
            <div  class="main-text" >
              <h5>Buchen Sie ein Termin: </h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
               </p>
               <br></br>
            </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align" >
          <div  class="main-text" >
              <h5>Meisterwerkstatt</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
             </p>
             <br></br>
              </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align">
          <div  class="main-text" >
              <h5>Moderne Ausstattung jeglicher Art</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
              </p>
              <br></br>
              </div>
          </div>
        </div>
    </div>

   <div class="parallax-container">
      <div class="parallax">
          <img src={ bmw_pic } alt=""/>
      </div>
    </div>
     
    <div  class="container">   
        <div  class="row">     
         
          <div  class="col xl4 l4 m6 s12 center-align" >
            <div  class="main-text" >
              <h5>Buchen Sie ein Termin: </h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
             </p>
             <br></br>
            </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align" >
          <div  class="main-text" >
              <h5>Meisterwerkstatt</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
              </p>
              <br></br>
              </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align">
          <div  class="main-text" >
              <h5>Moderne Ausstattung jeglicher Art</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
             </p>
             <br></br>       
              </div>
          </div>
        </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
          <img src={ grav_2_pic } alt=""/>
      </div>
    </div>

    <div  class="container">   
        <div  class="row">     
         
          <div  class="col xl4 l4 m6 s12 center-align" >
            <div  class="main-text" >
              <h5>Buchen Sie ein Termin: </h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
             </p>
             <br></br>
            </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align" >
          <div  class="main-text" >
              <h5>Meisterwerkstatt</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
              </p>
              <br></br>
              </div>
          </div>
         
          <div class="col xl4 l4 m6 s12 center-align">
          <div  class="main-text" >
              <h5>Moderne Ausstattung jeglicher Art</h5>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
             </p>
             <br></br>       
              </div>
          </div>
        </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
          <img src={korabl2} alt=""/>
      </div>
    </div>

      <footer>
          <div class="container" height="20px">            
            <div class="row">
            
                <div class="col xl4 l4 m6 s12 center-align">
                <a href="./kontakt">
                  < h6 class="white-text" >Kontakt</h6>
                  </a>
                </div>

                <div class="col xl4 l4 m6 s12 center-align">
                  <a href="./impressum">
                    <h6 class="white-text" href="#!">Impressum</h6>
                    </a>
                </div>
        
                <div class="col xl4 l4 m6 s12 center-align">
                  <a href="./datenschutz">
                    <h6 class="white-text" href="#!">Datenschutz</h6>
                  </a>
                </div>

              <div class="copyrightText" > © 2022 Copyright Dienstleistungen GRAV</div>
            </div>
          </div>
    </footer>
  </body>         
  )
}