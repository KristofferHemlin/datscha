import React, { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/actions/authActions";
import auth from "../Auth/Auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("https://datscha-fe-code-test-api.azurewebsites.net/login", {
        username: username,
        password: password
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(login(username, res.data));
          auth.login(() => {
            history.push("/index");
          });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", username);
        }
      })
      .catch(error => {
        console.log("Du angav fel uppgifter");
      });
  };
  return (
    <div className={style.start}>
      <div className={style.textArea}>
        <div className={style.title}>Datscha</div>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Användarnamn</label>
          <input
            type="text"
            onChange={e => setUsername(e.target.value)}
            placeholder="Ditt användarnamn"
          />
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Ditt lösenord"
          />
          <input type="submit" value="Logga in" className={style.button} />
        </form>
      </div>
    </div>
  );
};

export default Login;
