import React from "react";

export default function Course({
  short_description,
  title,
  money,
  thumbnailUrl,
  teacher,
  course_status,
  mentor,
}) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={thumbnailUrl} alt="" />
          <span className="badge b1">{course_status}</span>
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="/img/icon-user-white.svg" alt="" />
                12
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> 100
              </div>
            </div>
            <div className="share">
              <img src="/img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </a>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
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
