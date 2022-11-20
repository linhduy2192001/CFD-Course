import React from "react";

export default function Mentor({
  description,
  avatar,
  position,
  title,
  website,
}) {
  return (
    <div className="avatar">
      <div className="teacher">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <div className="name">{title}</div>
          <div className="title">{position}</div>
          <p className="intro">{description}</p>
          <p>
            <strong>Website:</strong> <a href="#">{website}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
