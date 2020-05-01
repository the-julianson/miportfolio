import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  const styles = {
    height: "12px",
    width: "25%"
  };
  return (
    <div className="footer">
      <h2>Skills</h2>
      <div className="markers">
        <div className="footer-left">
        <div className="skill">
            <span className="skill-span">Git</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <br />
          <div className="skill">
            <span className="skill-span">JavaScript</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <br/>
          <div className="skill">
            <span className="skill-span">React</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
        </div>
        <div className="footer-middle">
          <div className="skill">
            <span className="skill-span">Git</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <br />
          <div className="skill">
            <span className="skill-span">JavaScript</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <br/>
          <div className="skill">
            <span className="skill-span">React</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
        </div>
        <div className="footer-right">
        <div className="skill">
            <span className="skill-span">Git</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <br />
          <div className="skill">
            <span className="skill-span">JavaScript</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
          <br/>
          <div className="skill">
            <span className="skill-span">React</span>
            <progress className="skill-bar" max="100" value="80"></progress>
          </div>
        </div>
      </div>
      <div className="autor">Created with React and passion by Julian!</div>
    </div>
  );
};

export default Footer;
