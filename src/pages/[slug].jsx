import React, { useMemo } from "react";
import {
  generatePath,
  Link,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Course from "../components/Course";
import PageNotFound from "../components/PageNotFound";
import useQuery from "../hooks/useQuery";
import courseService from "../services/courseService";
import { LoadingOutlined } from "@ant-design/icons";
import usePageChangeOnTop from "../hooks/usePageChangeOnTop";
import Accordion from "../components/Accordion";
import Required from "../components/Required";
import PageLoading from "../components/PageLoading";
import { useState } from "react";
import Mentor from "../components/Mentor";
import Page404 from "./not-found";
import { REGISTER_PATH } from "../config/path";

export default function CourseDetail() {
  const [activeContent, setActiveContent] = useState();
  const { slug, id } = useParams();
  const location = useLocation();
  const { data: course, loading } = useQuery(
    () => courseService.getDetail(id),
    [id]
  );
  const { data: courses } = useQuery(() => courseService.getList(), []);

  if (loading)
    return (
      <p>
        {" "}
        Đang tải dữ liệu <LoadingOutlined />{" "}
      </p>
    );

  if (!course) return <Page404 />;

  const registerPath = generatePath(REGISTER_PATH, {
    id: course.id,
    slug: course.slug,
  });

  return (
    <main className="course-detail" id="main">
      <section
        className="banner style2"
        style={{ "--background": course.template_color_banner }}
      >
        <div className="container">
          <div className="info">
            <h1>{course.title}</h1>
            <div className="row">
              <div className="date">
                <strong>Khai giảng:</strong> 12/10/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
            </div>
            <Link
              to={registerPath}
              className="btn white round"
              style={{ "--color-btn": course.template_color_btn }}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>{" "}
              <span>giới thiệu</span>
            </div>
            <div className="money">{course.money} VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{course.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <p className="des">{course.short_description}</p>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <Accordion.Group>
            {course?.content?.map((e, i) => {
              return (
                <Accordion
                  isOpen={i === activeContent}
                  onClick={() =>
                    setActiveContent(i === activeContent ? undefined : i)
                  }
                  date={i + 1}
                  key={i}
                  title={e.title}
                >
                  {e.content}
                </Accordion>
              );
            })}
          </Accordion.Group>

          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {course.required.map((e, i) => {
              return <Required key={i} content={e.content} />;
            })}
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            <div className="col-md-6">
              Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.
            </div>
            <div className="col-md-6">
              Dạy và thực hành thêm bài tập online thông qua Skype.
            </div>
            <div className="col-md-6">
              Được các mentor và các bạn trong team CFD hổ trợ thông qua group
              CFD Facebook hoặc phần mềm điều khiển máy tính.
            </div>
            <div className="col-md-6">
              Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.
            </div>
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học
              viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
            <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ
            12h-15h, Chủ nhật từ 15h-18h
          </p>
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src={course.teacher.avatar} alt="" />
              </div>
              <div className="info">
                <div className="name">{course.teacher.title}</div>
                <div className="title">{course.mentor.positon}</div>
                <p className="intro">{course.teacher.description}</p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="#">http://nghiatran.info</a>
                </p>
              </div>
            </div>
          </div>
          <h3 className="title">Mentor</h3>
          {course.mentor &&
            course.mentor.map((e) => {
              return <Mentor key={e.id} {...e} />;
            })}

          <div className="bottom">
            <div className="user">
              <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <div className="btn main btn-register round">đăng ký</div>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    React JS
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Animation
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    Scss, Grunt JS và Boostrap 4
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {courses &&
              courses.slice(0, 3).map((e) => {
                return <Course key={e.id} {...e} />;
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
