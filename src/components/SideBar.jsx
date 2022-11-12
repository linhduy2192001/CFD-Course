import React from "react";
import { Link } from "react-router-dom";
import { HOME_PATH, TEAM_PATH } from "../config/path";

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
          <a href="#">Khóa Học</a>
        </li>
        <li>
          <a href="#">Dự Án</a>
        </li>
        <li>
          <a href="#">Liên hệ</a>
        </li>
      </ul>
    </nav>
  );
}
