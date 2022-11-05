import React from "react";
import { generatePath, Link } from "react-router-dom";
import { COURSE_DETAIL } from "../config/path";

export default function Course({
  short_description,
  title,
  thumbnailUrl,
  teacher,
  slug,
  id,
}) {
  const path = generatePath(COURSE_DETAIL, { slug, id });
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link to={path} className="cover">
          <img src={thumbnailUrl} alt="" />
        </Link>
        <div className="info">
          <Link to={path} className="name">
            {title}
          </Link>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher.avatar} alt="" />
            </div>
            <div className="name">{teacher.title}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}
