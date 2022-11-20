import authService from "../services/authService";
import userService from "../services/userService";
import { AUTH_LOGIN, AUTH_LOGOUT } from "./type";

let user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
}

const initialState = {
  user,
};
// {
//     type:string,
//     payload:...
// }

export const loginAction = (object) => {
  return async (dispatch) => {
    try {
      const result = await authService.login(object.form);
      if (result.data) {
        localStorage.setItem("token", JSON.stringify(result.data));
        const user = await userService.getInfo();
        if (user.data) {
          localStorage.setItem("user", JSON.stringify(user.data));
          // setUser(user.data);
          dispatch({ type: AUTH_LOGIN, payload: user.data });
          object.success();
          // setIsOpenLoginModal(false);
        }
      }
    } catch (err) {
      object.error(err);
    } finally {
      object.finally;
    }
  };
};

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGOUT:
      return {
        user: null,
      };
    case AUTH_LOGIN:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
}
