import React, { useState } from "react";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useAuth } from "../hooks/useAuth";x
import { Link, useNavigate } from "react-router-dom";
import { HOME_PATH, PROFILE_PATH } from "../config/path";
import { createStore } from "redux";
import { usePage } from "../hooks/usePage";
import { AUTH_LOGIN } from "../store/type";
import { loginAction, logoutAction } from "../store/authReducer";

export default function Header() {
  // const { user, onLogin, onLogout } = useAuth();
  const navigate = useNavigate();
  const { setIsOpenLoginModal } = usePage();

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const onLogout = (ev) => {
    ev.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(logoutAction());
    navigate("/");
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
          {user ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">{user.name}</div>
                  <div className="avatar">
                    <img src={user.avatar} alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="#">Khóa học của tôi</Link>
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
