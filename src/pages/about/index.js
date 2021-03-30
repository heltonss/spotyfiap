import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './style.css';



const About = ({ }) => {

  return (
    <div className="modal display-block">
      <section className="modal-main">

        <div style={{ width: 400, height: 400 }}>

        </div>
      </section>
    </div>
  );
};

export default connect()(About);
