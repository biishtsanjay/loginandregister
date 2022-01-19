import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
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
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };
  return (
    <div className="container">
      <div className="leftContainer">
        <img src={require("./light.jpg")} alt="background image" />
      </div>
      <div className="rightContainer">
        <div className="rightInnerContainer">
          {/* {console.log(user)} */}
          <p className="loginText">Login Page</p>
          <div className="inputContainer">
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
            <button onClick={login}>LOGIN</button>
            <br></br>
            </div>
            <p className="notYet">
              not registered yet ?
              <a onClick={() => history.push("/register")}> ...CLICK HERE</a>
            </p>
          
        </div>
      </div>
    </div>
  );
};
export default Login;
