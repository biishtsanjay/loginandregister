import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post("http://localhost:9002/register", user).then((response) => {
        alert(response.data.message);
        history.push("/login");
      });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div className="container">
      <div className="leftContainer">
        <img src={require("./light.jpg")} alt="background image" />
      </div>
      <div className="rightContainer">
        <div
          className="rightInnerContainer"
        >
          {/* {console.log(user)} */}
          <p className="loginText">Registration Page</p>
          <div className="inputContainer" >
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter your name"
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              onChange={handleChange}
            ></input>
            <button onClick={register}>
              REGISTER
            </button>
            <br></br>
          </div>
            <p className="notYet">
              already registered ?
              <a onClick={() => history.push("/login")}> ...CLICK HERE</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
