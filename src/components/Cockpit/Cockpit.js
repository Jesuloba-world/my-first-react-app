import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEfect");
    // simulating HTTP request
    // const timer = setTimeout(() => {
    //     console.log("saved data to cloud");
    // }, 3000);

    toggleBtnRef.current.click();

    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] Cleanup work in useEffect");
    };
  }, []);

  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
        Toggle Persons
      </button>
      {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default React.memo(cockpit);
