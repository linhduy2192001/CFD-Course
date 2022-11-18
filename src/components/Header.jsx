import React, { useState } from "react";
import { useContext } from "react";
// import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PATH, PROFILE_PATH } from "../config/path";
import { usePage } from "../hooks/usePage";

export default function Header() {
  // const { user, onLogin, onLogout } = useAuth();

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const { setIsOpenLoginModal } = usePage();
  const onLogout = (ev) => {
    ev.preventDefault();
    navigate("/");
    //     setUser();
  };

  const onLogin = (ev) => {
    ev.preventDefault();
    setIsOpenLoginModal(true);
  };
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger">
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to={HOME_PATH} className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {login ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">sadasdasda</div>
                  <div className="avatar">
                    <img src="" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <Link to={PROFILE_PATH}> Thông tin tài khoản</Link>
                <a href="javascript:void()" onClick={onLogout}>
                  Đăng xuất
                </a>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none" onClick={onLogin}>
              <a href="javascript:void()" className="btn-register">
                Đăng nhập
              </a>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
