import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Count from "../components/Count";
import Input from "../components/Input";
import { useForm } from "../hooks/useForm";
import { validate } from "../utils/validate";

export default function Contact() {
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
      console.log("thanh cong");
    }
  };
  /**
   * Ref 1: Thao tac voi DOM element
   * Ref 2: forwardRef
   * Ref 3: vừa forwardRef -> trả ra 1 thể hiện khác của ref, sử dụng useImperativeHandle
   */
  // const [form, setForm] = useState({});
  // const [error, setError] = useState({});
  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
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
          <Input label="Tiêu đề" required placeholder="Tiêu đề liên hệ/" />
          <Input label=" Nội dung" required placeholder="Tiêu đề liên hệ/" />
          <label>
            <p>
              Nội dung<span>*</span>
            </p>
            <textarea name id cols={30} rows={10} defaultValue={""} />
          </label>
          <div className="btn main rect" onClick={onSubmit}>
            đăng ký
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
