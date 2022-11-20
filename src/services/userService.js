import api from "../config/api";

const userService = {
  updateInfo(data) {
    return api.post("/user/update", { data });
  },
  getInfo() {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      return api.get("/user/get-info", {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
    }
  },
};
export default userService;
