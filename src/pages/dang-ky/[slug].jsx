import React, { useMemo } from "react";
import { generatePath, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import courseService from "../../services/courseService";
import { LoadingOutlined } from "@ant-design/icons";
import Page404 from "../not-found";
import { REGISTER_PATH } from "../../config/path";
import { currency } from "../../utils";
import moment from "moment";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Input";
export default function Register() {
  const { id } = useParams();
  const { data: course, loading } = useQuery(
    () => courseService.getDetail(id),
    [id]
  );

  const { form, setForm, error, validate } = useForm({
    name: [{ required: true }],
    email: [
      { required: true, message: "Email là trường bắt buộc" },
      { regexp: "email", message: "Bắt buộc đúng định dạng Email" },
    ],
    phone: [{ required: true }, { regexp: "phone" }],
    website: [
      { required: true },
      { regexp: /https:\/\/(www\.)facebook.com\/[-a-zA-Z0-9]+/ },
    ],
  });

  const onSubmit = () => {
    if (validate()) {
    }
  };
  if (loading)
    return (
      <p>
        {" "}
        Đang tải dữ liệu <LoadingOutlined />{" "}
      </p>
    );
  if (!course) {
    return <Page404 />;
  }
  const date = moment(course.opening_time);
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">{course.title} </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng: </strong>
                {date.format("DD/MM/YYYY")}
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> {course.count_video} buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> {currency(course.money)} VND
              </div>
            </div>
            <div className="form">
              <Input
                error={error.name}
                value={form.name}
                onChange={(ev) =>
                  setForm({ ...form, name: ev.currentTarget.value })
                }
                label="Họ và tên"
                required
                placeholder="Họ và tên"
              />
              <Input
                error={error.phone}
                value={form.phone}
                onChange={(ev) =>
                  setForm({ ...form, phone: ev.currentTarget.value })
                }
                label="Số điện thoại"
                required
                placeholder="Số điện thoại"
              />
              <Input
                error={error.email}
                value={form.email}
                onChange={(ev) =>
                  setForm({ ...form, email: ev.currentTarget.value })
                }
                label="Email"
                required
                placeholder="Email"
              />
              <Input
                error={error.website}
                value={form.website}
                onChange={(ev) =>
                  setForm({ ...form, website: ev.currentTarget.value })
                }
                label="Link FB"
                placeholder="Link FB"
              />
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                  {/* Cần ít nhất 200 COIN để giảm giá */}
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label>
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
              </label>
              <div className="btn main rect" onClick={onSubmit}>
                đăng ký
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}
