import api from "../config/api";

const authService = {
  login(data) {
    return api.post("/authentication/v2/login", data);
  },
  register(data) {
    return api.post("/register", data);
  },
  refreshToken(data) {
    return api.post("/authentication/v2/refresh-token", data);
  },
};
export default authService;
