import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const onLogout = (ev) => {
    ev.preventDefault();
    navigate("/");
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
        <a href="#" className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </a>
        <div className="right">
          {login ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">Phan Ngọc Linh Duy</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#" onClick={onLogout}>
                  Đăng xuất
                </a>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <a href="#" className="btn-register">
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
