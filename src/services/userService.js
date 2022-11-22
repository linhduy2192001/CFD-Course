import api from "../config/api";

const userService = {
  updateInfo(data) {
    return api.post("/user/update", { data });
  },
  getInfo() {
    return api.get("/user/get-info");
  },
};
export default userService;
