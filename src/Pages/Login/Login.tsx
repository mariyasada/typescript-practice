import React, { useState } from "react";
import style from "./Login.module.css";
import { AuthContextType, UserData } from "../../Types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const { loginHandler } = useAuth() as AuthContextType;
  const [loginData, setLoginData] = useState<UserData>({
    email: "",
    password: "",
  });
  const [isShow, setIsShow] = useState<boolean>(false);
  const [err, setError] = useState<string[]>([]);

  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    const temparr = [];
    if (loginData.email !== "" && loginData.password !== "") {
      if (!loginData.email.includes("@")) {
        temparr.push("Email id is not valid");
      }

      if (loginData.password.length < 8 || loginData.password.length > 16) {
        temparr.push("password length must be betwen 8 to 16 character");
      }
      if (err?.length === 0) {
        loginHandler(loginData);
      }
    } else {
      temparr.push("please fill both the fields");
    }
    setError(temparr);
  };
  return (
    <div className={style.container}>
      <h2>Login Pagee</h2>
      <div className={style.inputContainer}>
        <div>
          <p>Email</p>
          <input
            type="text"
            name="email"
            id="email"
            onChange={onChangehandler}
          />
        </div>
        <div>
          <p>password</p>
          <input
            type={!isShow ? "password" : "text"}
            name="password"
            id="password"
            onChange={onChangehandler}
          />
        </div>
        <div className={style.icon} onClick={() => setIsShow((prev) => !prev)}>
          {isShow ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <button className={style.btn} onClick={submitHandler}>
        Login
      </button>
      <div style={{color:"red"}}>{err?.map((error)=><span>{error}</span>)}</div>
    </div>
  );
};

export default Login;
