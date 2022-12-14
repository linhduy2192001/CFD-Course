import React, { useState } from "react";
import Coin from "./coin";
import Project from "./du-an";
import MyCourse from "./khoa-hoc";
import Payment from "./lich-su-thanh-toan";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Profile() {
  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder="Nguyễn Văn A" />
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input type="text" placeholder="0949******" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <div className="btn main rect">LƯU LẠI</div>
    </div>
  );
}
