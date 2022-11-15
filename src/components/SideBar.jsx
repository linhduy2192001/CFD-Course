import React from "react";
import { Link } from "react-router-dom";
import {
  COURSE_DETAIL,
  HOME_PATH,
  TEAM_PATH,
  PROFILE_PROJECT_PATH,
} from "../config/path";

export default function SideBar() {
  return (
    <nav className="nav">
      <ul>
        <li className="li_login">
          <a href="#">Đăng ký / Đăng nhập</a>
        </li>
        <li className="active">
          <Link to={HOME_PATH}>Trang chủ</Link>
        </li>
        <li>
          <Link to={TEAM_PATH}>CFD Team</Link>
        </li>
        <li>
          <Link to={COURSE_DETAIL}>Khóa Học</Link>
        </li>
        <li>
          <Link to={PROFILE_PROJECT_PATH}>Dự Án</Link>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
      </ul>
    </nav>
  );
}
