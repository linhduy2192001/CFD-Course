import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { usePage } from "../hooks/usePage";
import authService from "../services/authService";

export default function LoginModal() {
  const { isOpenLoginModal, setIsOpenLoginModal } = usePage();
  const [form, setForm] = useState({});
  const onSubmit = async () => {
    const result = await authService.login(form);
  };
  return ReactDOM.createPortal(
    <div
      className="popup-form popup-login"
      style={{ display: isOpenLoginModal ? "flex " : "none" }}
    >
      <div className="wrap">
        {/* login-form */}
        <div className="ct_login" style={{ display: "block" }}>
          <h2 className="title">Đăng nhập</h2>
          <input
            type="text"
            onChange={(ev) => (form.username = ev.currentTarget.value)}
            placeholder="Email / Số điện thoại"
          />
          <input
            type="password"
            onChange={(ev) => (form.password = ev.currentTarget.value)}
            placeholder="Mật khẩu"
          />
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">
              Quên mật khẩu?
            </a>
          </div>
          <div className="btn rect main btn-login" onClick={onSubmit}>
            đăng nhập
          </div>

          <div className="close" onClick={() => setIsOpenLoginModal(false)}>
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
        {/* email form */}
      </div>
    </div>,
    document.body
  );
}
