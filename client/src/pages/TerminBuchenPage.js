import React, { useState} from "react";
import logo from "../pictures/logo_bundes.png";
import emailjs from "@emailjs/browser";
import $ from "jquery";

$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  $(".parallax").parallax();
});

const Result = () => {
  return <p>Ihre Nachricht wurde erfolgreich versendet.</p>;
};

export const TerminBuchenPage = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [e_mail, sete_mail] = useState("");

  const [first_nameDirty, setfirst_nameDirty] = useState(false);
  const [last_nameDirty, setlast_nameDirty] = useState(false);
  const [phone_numberDirty, setphone_numberDirty] = useState(false);
  const [e_mailDirty, sete_mailDirty] = useState(false);

  const [first_nameError, setfirst_nameError] = useState("");
  const [last_nameError, setlast_nameError] = useState("");
  const [phone_numberError, setphone_numberError] = useState("");
  const [e_mailError, sete_mailError] = useState("");

  const [result, showResult] = useState(false);

  const blurHabdler = (e) => {
    switch (e.target.name) {
      case "first_name":
        setfirst_nameDirty(true);
        break;
      case "last_name":
        setlast_nameDirty(true);
        break;
      case "phone_number":
        setphone_numberDirty(true);
        break;
      case "e_mail":
        sete_mailDirty(true);
        break;

      default:
        break;
    }
  };

  const first_nameHandler = (e) => {
    setfirst_name(e.target.value);

    if (first_nameDirty && (e.target.value === "" || e.target.value === null)) {
      setfirst_nameError("Geben Sie Ihren Vornamen ein!");
    } else {
      setfirst_nameError("");
    }
  };

  const last_nameHandler = (e) => {
    setlast_name(e.target.value);

    if (last_nameDirty && (e.target.value === "" || e.target.value === null)) {
      setlast_nameError("Geben Sie Ihren Nachnamen ein!");
    } else {
      setlast_nameError("");
    }
  };

  const phone_numberHandler = (e) => {
    setphone_number(e.target.value);
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (phone_numberDirty && (e.target.value === "" || e.target.value === null)) {
      setphone_numberError("Geben Sie Ihre Telefon-Nummer ein!");
    } 

    if(!re.test(String(e.target.value).toLowerCase())){
      setphone_numberError("Das ist eine ungültige Telephon-Nummer!")
    } else {
      setphone_numberError("");
    }
  };

  const e_mailHandler = (e) => {
    sete_mail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (e_mailDirty && (e.target.value === "" || e.target.value === null)) {
      sete_mailError("Geben Sie Ihre E-Mail Adresse ein!");
    } 
    
    if(!re.test(String(e.target.value).toLowerCase())){
      sete_mailError("Das ist eine ungültige E-mail Adresse!")
    } else {
      sete_mailError("");
    }
  };

  function isEmpty(elem) {
    if (elem === "" || elem === null) {
      return true;
    } else {
      return false;
    }
  }

  const makeItValid = (e) => {
    const v_name = document.getElementById("first_name").value;
    const l_name = document.getElementById("last_name").value;
    const p_number = document.getElementById("phone_number").value;
    const var_mail = document.getElementById("e_mail").value;
    var count = 0;

    if (isEmpty(v_name)) {
      setfirst_nameError("Geben Sie Ihren Vornamen ein!");
      count++;
    }

    if (isEmpty(l_name)) {
      setlast_nameError("Geben Sie Ihren Nachnamen ein!");
      count++;
    }

    if (isEmpty(p_number)) {
      setphone_numberError("Geben Sie Ihre Telefon-Nummer ein!");
      count++;
    }
    if (isEmpty(var_mail)) {
      sete_mailError("Geben Sie Ihre E-Mail Adresse ein!");
      count++;
    }

    if (count > 0) {
      return false;
    } else {
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isValid = makeItValid();

    if (isValid) {
      emailjs
        .sendForm(
          "service_cmzokqj",
          "template_uty0g7l",
          e.target,
          "rbQ7i4yUiIZjMcMw0"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      showResult(true);
    }
  };

  return (
    <body>
      <div>
        <div class="navbar-fixed">
          <nav>
            <div class="nav-wrapper">
              <div class="container">
                <a href="./" class="brand-logo">
                  <img src={logo} height="40" width="55" alt="logo" />
                </a>
                <a href="./" data-target="sidenav-list" class="sidenav-trigger">
                  <i class="material-icons">menu</i>
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                    <a href="./">Hauptseite</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul class="sidenav" id="sidenav-list">
          <li>
            <a href="./">
              <span class="name white-text">Hauptseite</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="termin_bckGr">
        <div class="container_termin">
          <div class="row">
            <div class="col s9 l9 m6 s12 center-align">
              <div class="kntForm_main_text">
                <h5 class="title_grav">Kontaktformular</h5>

                <div class="row">
                  <form class="col s12" action="" onSubmit={sendEmail}>
                    <div class="row">
                      <div class="input-field col s6">
                        <input onBlur={(e) => blurHabdler(e)} id="first_name" type="text" name="first_name" class="validate" onChange={(e) => first_nameHandler(e)} value={first_name} />
                        <label for="first_name">Vorname</label>
                        <div style={{ color: "red" }} onChange={first_nameDirty}>
                          {" "} {first_nameError}
                        </div>
                      </div>

                      <div class="input-field col s6">
                        <input onBlur={(e) => blurHabdler(e)} id="last_name" type="text" name="last_name" class="validate" onChange={(e) => last_nameHandler(e)} value={last_name}/>
                        <label for="last_name">Nachname</label>
                        <div style={{ color: "red" }} onChange={last_nameDirty}> {" "}
                          {last_nameError}{" "}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="input-field col s6">
                        <input onBlur={(e) => blurHabdler(e)} id="phone_number" type="text" name="phone_number" class="validate" onChange={(e) => phone_numberHandler(e)} value={phone_number} />
                        <label for="phone_number">Handynummer</label>
                        <div style={{ color: "red" }} onChange={phone_numberDirty}>
                          {" "} {phone_numberError}{" "}
                        </div>
                      </div>

                      <div class="input-field col s6">
                        <input onBlur={(e) => blurHabdler(e)} id="e_mail" type="text" name="e_mail" class="validate" onChange={(e) => e_mailHandler(e)} value={e_mail}/>
                        <label for="e_mail">Email</label>
                        <div style={{ color: "red" }} onChange={e_mailDirty}>
                          {" "} {e_mailError}{" "}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="input-field col s6">
                        <input id="auto_brand" type="text" name="auto_brand" class="validate"/>
                        <label for="auto_brand">Autohersteller</label>
                      </div>

                      <div class="input-field col s3">
                        <input id="auto_model" type="text" name="auto_model" class="validate"/>
                        <label for="auto_model">Model Ihres Autos</label>
                      </div>

                      <div class="input-field col s3">
                        <input id="first_regist" type="text" name="first_regist" class="validate" />
                        <label for="first_regist">Erstzulassung</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="input-field col s12">
                        <input id="message" type="text" name="message" class="validate"/>
                        <label for="message">
                          Beschreiben Sie das Anliegen
                        </label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col s6 l4 m6 s12">
                        Sie werden innerhalb von 24 Stunden angerufen.
                      </div>
                      <div class="col s3 l4 m6 s12">
                        <button class="btn waves-effect waves-light" type="submit" name="action">
                          Senden
                          <i class="material-icons right">send</i>
                        </button>
                      </div>

                      <div class="col s3 l4 m6 s12">
                        {result ? <Result /> : null}
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                  </form>
                </div>
              </div>
            </div>

            {/* contact column */}
            <div class="col s3 center-align">
              <div class="kntForm_main_text">
                <div>
                  <h5 class="title_grav">Kontakt</h5>
                  <div class="kontakt">
                    <p>Boxen Gasse</p>
                    <p>76227 Stutensee </p>
                    <p>Stepan Bandera Str. 8</p>
                    <p>tel: 049-355-777-325</p>
                  </div>
                  <h5 class="title_grav">Öffnungszeiten</h5>
                  <div class="kontakt">
                    <p>Mo.-Fr.: 06.30-21.30</p>
                    <p>Sa.: 07.00-21.00</p>
                    <p>So.: 07.15-20.45</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div class="container" height="20px">
          <div class="row">
            <div class="col xl4 l4 m6 s12 center-align">
              <a href="./kontakt">
                <h6 class="white-text">Kontakt</h6>
              </a>
            </div>

            <div class="col xl4 l4 m6 s12 center-align">
              <a href="./impressum">
                <h6 class="white-text" href="#!">
                  Impressum
                </h6>
              </a>
            </div>

            <div class="col xl4 l4 m6 s12 center-align">
              <a href="./datenschutz">
                <h6 class="white-text" href="#!">
                  Datenschutz
                </h6>
              </a>
            </div>

            <div class="copyrightText">
              {" "}
              © 2022 Copyright Dienstleistungen GRAV
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};
