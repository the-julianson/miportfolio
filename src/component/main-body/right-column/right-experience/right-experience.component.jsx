import React from "react";

const RigthExperience = () => {
  return (
    <div className="projects">
      <h3
        style={{
          textAlign: `center`
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
        >
          {` (github).`}
        </a>
      </h5>
      <div className="paragraph">
        <p>
          Implemented<strong> Navigation</strong>, using <strong>Link </strong>
          and <strong>advanced routing</strong> (match and history).
        </p>
        <p>
          Implemented <strong>Redux</strong>, also <strong>selectors </strong>
          were used to <strong>memoized </strong>the context.
        </p>
        <p>
          Implemented <strong>applyMiddleware()</strong> to create an{" "}
          <strong>Async Flow</strong> for redux.&nbsp;
        </p>
        <p>
          Created<strong> reusable components</strong> (e.g. a custom-button).
        </p>
        <p>
          Applied<strong> SASS</strong> as well as in-line CSS styling.&nbsp;
        </p>
        <p>
          Implemented <strong>user authentication</strong> (email and Google
          sign in); user data was persisted in <strong>Firestore.&nbsp;</strong>
        </p>
        <p>
          Used<strong> Git</strong> for local repo and <strong>GitHub </strong>
          for<strong> remote repository</strong>.
        </p>
        <p>
          Implemented<strong> Advanced JavaScript </strong>functions and
          methods such as:{" "}
          <strong>map, reduce, filter, find, async/await</strong>; also{" "}
          <strong>spread, destructuring</strong>,{" "}
          <strong>ternary operators </strong>and others<strong>.</strong>
        </p>
      </div>
      <h5 style={{
        marginTop: `20px`
      }}>
        * todoList WebApp
        <a
          href="https://the-julianson.github.io/todoList/"
          style={{
            textDecoration: `none`,
            color: `orange`
          }}
        >
          {` (github).`}
        </a>
      </h5 >
      <div className="paragraph"
      >
        <p>
        Simple todoList app using hooks to manage state. LocalStorage applied.
Created a Redux-type data flow using useState, useContext and useReducer. 

        </p>
      </div>
    </div>
  );
};

export default RigthExperience;
