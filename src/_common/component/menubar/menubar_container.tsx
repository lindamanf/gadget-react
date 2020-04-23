import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menubar_container.scss";
import Signup from "../login/signup";

function MenubarContainer() {
  const [signup, setSignup] = useState(false);
  const signupHandler = () => setSignup(!signup);
  return (
    <div className="menu">
      <div className="menu_content">
        <div className="menu_main">
          <Link to="/">
            <div className="logo" />
          </Link>
        </div>
        <div className="menu_user">
          <div className="menu_login">ログイン</div>
          <div className="menu_register" onClick={signupHandler}>
            登録
          </div>
        </div>
      </div>
      {signup && <Signup handler={signupHandler} />}
    </div>
  );
}

export default MenubarContainer;
