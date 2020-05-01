import React from "react";
import "./left-first.styles.scss";

const LeftFirst = ({ color, height }) => (
  <div className="left-first">
    <h2>Perfil</h2>
    <p>
      Actualmente estoy en la búsqueda de una oportunidad para desarrollarme
      como Frontend developer para poder crear soluciones que faciliten la vida
      de las personas. También la posibilidad de integrarme a un ambiente en
      donde la base del progreso esté dado por la capacidad y las ganas de
      desafiarse, de seguir aprendiendo y de desafiar el status-quo.
    </p>
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: height
      }}
    />
  </div>
);
export default LeftFirst;
