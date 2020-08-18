import React from "react";

const RigthExperience = () => {
  return (
    <>
      <div className="experience">
        <h3
          style={{
            textAlign: `center`,
            marginTop: `0.5em`
          }}
        >
          Experience
        </h3>
        <h5>
          * Fullstack dev @Incluit - June 2020 - Present
          <a
            href="https://developers.junar.com/"
            style={{
              textDecoration: `none`,
              color: `orange`
            }}
            target="blank"
          >
            {` (@web).`}
          </a>
        </h5>
        <div className="paragraph">
          <p>
            Frontend: JavaScript, HTML, CSS Backend: Django Framework,
            Django-REST Framework & REST-API.<br></br> Working and learning from
            talented engineers, I am currently helping to build and maintain the
            workspace site and API-Manager for VOR-TEX account.
          </p>
        </div>
        <h5>* Freelance React Developer @Bivproctor - May 2020</h5>
        <div className="paragraph">
          <p>
            Freelance work for 1 month using a MaterialUI template, React
            version. Accomplished code refactoring as well as introduction of
            new functionalities in the dashboard for the Bivproctor website.
            Worked with functional and class components.
          </p>
        </div>
      </div>
      <div className="projects">
        <h3
          style={{
            textAlign: `center`,
            marginTop: `1.2em`
          }}
        >
          Projects
        </h3>
        <h5>
          * E-commerce project
          <a
            href="https://github.com/the-julianson/crown-store"
            style={{
              textDecoration: `none`,
              color: `orange`
            }}
            target="blank"
          >
            {` (@github).`}
          </a>
          {" | "}
          <a
            href="https://crownstore.herokuapp.com/"
            style={{
              textDecoration: `none`,
              color: `orange`
            }}
            target="blank"
          >
            {` (@Heroku live demo).`}
          </a>
        </h5>
        <div className="paragraph">
          <p>
            E-commerce project using react, advanced javascript functions,
            functional and class components. User authentication using Firestore
            to persist user data. SASS and in-line styling was applied.
          </p>
        </div>
        <h5
          style={{
            marginTop: `20px`
          }}
        >
          * todoList WebApp, demo with repo
          <a
            href="https://the-julianson.github.io/todoList/"
            style={{
              textDecoration: `none`,
              color: `orange`
            }}
            target="blank"
          >
            {` (@GitHub pages).`}
          </a>
        </h5>

        <div className="paragraph">
          <p>
            Simple todoList app using hooks to manage state. LocalStorage
            applied. Created a Redux-type data flow using useState, useContext
            and useReducer.
          </p>
        </div>
        <h5
          style={{
            marginTop: `20px`
          }}
        >
          * portfolio ReactApp, demo with repo
          <a
            href="https://julianbazanaguirre-ecf1b.web.app/"
            style={{
              textDecoration: `none`,
              color: `orange`
            }}
            target="blank"
          >
            {` (demo @Firebase).`}
          </a>
          {" | "}
          <a
            href="https://gitlab.com/the-julianson/portfolio"
            style={{
              textDecoration: `none`,
              color: `orange`
            }}
            target="blank"
          >
            {` (repo @GitLab).`}
          </a>
        </h5>

        <div className="paragraph">
          <p>
            Using Bootstrap, Router, Firebase to send email (only working in
            localHost until now). Django project shown, but not yet live (plan
            to do it with Heroku as well).
          </p>
        </div>
      </div>
    </>
  );
};

export default RigthExperience;
