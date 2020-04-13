import React, { useEffect } from "react";
import style from "./Index.module.css";
import auth from "../Auth/Auth";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setProperties } from "../../store/actions/authActions";
import axios from "axios";
import Dropdown from "../../components/Dropdown/Dropdown";
import Result from "../../components/Result/Result";

const Index = () => {
  const username = useSelector(state => state.username);
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionLogout = () => {
    dispatch(logout());
    auth.logout(() => {
      history.push("/");
    });
  };
  useEffect(() => {
    axios
      .get("https://datscha-fe-code-test-api.azurewebsites.net/properties", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log(res);
        dispatch(setProperties(res.data));
      })
      .catch(error => {
        console.log(error.response);
      });
  });

  return (
    <div className={style.start}>
      <div className={style.textArea}>
        <div className={style.title}>Välkommen {username}</div>
        <Dropdown />
        <Result />
        <button onClick={sessionLogout} className={style.button}>
          Logga ut
        </button>
      </div>
    </div>
  );
};

export default Index;
