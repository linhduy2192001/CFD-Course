import React, { useReducer } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { usePage } from "../hooks/usePage";
import authService from "../services/authService";
import userService from "../services/userService";
import { loginAction } from "../store/authReducer";

function loginReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isFetching: action.payload,
      };
    case "errorMessage":
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}

export default function LoginModal() {
  const { isOpenLoginModal, setIsOpenLoginModal, setUser } = usePage();
  // const [isFetching, setIsFetching] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({});

  const [state, dispatchFun] = useReducer(loginReducer, {
    isFetching: false,
    errorMessage: "",
  });

  console.log("state :>> ", state);

  const dispatch = useDispatch(loginReducer);
  const onSubmit = async () => {
    dispatchFun({ type: "loading", payload: true });
    dispatch(
      loginAction({
        form,
        success: () => {
          setIsOpenLoginModal(false);
        },
        error: (err) => {
          dispatchFun({ type: "errorMessage", payload: err.message });

          // setErrorMessage(err.message);
        },
        finally: () => {
          dispatchFun({ type: "errorMessage", payload: false });
          // setIsFetching(false);
        },
      })
    );
    // const result = await authService.login(form);
    // if (result.data) {
    //   localStorage.setItem("token", JSON.stringify(result.data));
    //   const user = await userService.getInfo();
    //   if (user.data) {
    //     localStorage.setItem("user", JSON.stringify(user.data));
    //     // setUser(user.data);
    //     dispatch({ type: "auth/login", payload: user.data });
    //
    //   }
    // }
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
          {state.errorMessage && (
            <p className="error-message">{state.errorMessage}</p>
          )}
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
