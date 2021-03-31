import React from "react";
import { connect } from "react-redux";
import Logo from 'assets/images/spotyfiap_logo.png';
import HeltonIsac from 'assets/images/helton_isac.jpeg';
import HeltonSouza from 'assets/images/helton_souza.jpeg';
import Lyan from 'assets/images/lyan_masterson.jpeg';
import Ricardo from 'assets/images/ricardo_kerr.jpeg';
import './style.css';
import DevContact from "components/DevContact";
import { useHistory } from "react-router";

const About = ({ }) => {

  let history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="modal display-block">
      <section className="modal-main">

        <div className="about-title">Sobre Nós</div>

        <div className="modal-content" >
          <img src={Logo} alt="Spotyfiap Logo" className="logo" />
          <div className="about-text">Version: 1.0.0</div>
          <div className="about-history">A Spotyfiap é uma empresa voltada para o estudo e diversão. Você estuda React ouvindo belas canções</div>
          <div className="about-text">Desenvolvedores:</div>
          <div className="about-developers">
            <DevContact devImg={HeltonIsac} devName="Helton Isac"></DevContact>
            <DevContact devImg={HeltonSouza} devName="Helton Souza"></DevContact>
            <DevContact devImg={Lyan} devName="Lyan Masterson"></DevContact>
            <DevContact devImg={Ricardo} devName="Ricardo Kerr"></DevContact>
          </div>
        </div>

        <div className="about-footer">
          <button onClick={goBack}>Fechar</button>
        </div>

      </section>
    </div>
  );
};

export default connect()(About);
