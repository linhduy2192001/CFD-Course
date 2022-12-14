import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
// import Home from "./pages";
// import Profile from "./pages/ca-nhan";
import Coin from "./pages/ca-nhan/coin";
import Project from "./pages/ca-nhan/du-an";
// import MyCourse from "./pages/ca-nhan/khoa-hoc";
import Payment from "./pages/ca-nhan/lich-su-thanh-toan";
// import Contact from "./pages/hop-tac";
// import Team from "./pages/than-vien";
// import CourseDetail from "./pages/[slug]";
import {
  PROFILE_PATH,
  PROFILE_PROJECT_PATH,
  PROFILE_COURSE_PATH,
  PROFILE_COIN_PATH,
  PROFILE_PAYMENT_PATH,
  COURSE_DETAIL,
  REGISTER_PATH,
} from "./config/path";
import Page404 from "./pages/not-found";
import Count from "./pages/count";
import { lazy } from "react";
import Register from "./pages/dang-ky/[slug]";

const Home = lazy(() => import("./pages"));
const Contact = lazy(() => import("./pages/hop-tac"));
const Team = lazy(() => import("./pages/than-vien"));
const MyCourse = lazy(() => import("./pages/ca-nhan/khoa-hoc"));
const Profile = lazy(() => import("./pages/ca-nhan"));
const CourseDetail = lazy(() => import("./pages/[slug]"));

const router = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/hop-tac",
        element: <Contact />,
      },
      {
        path: "/than-vien",
        element: <Team />,
      },
      {
        path: REGISTER_PATH,
        element: <Register />,
      },
      {
        path: "/count",
        element: <Count />,
      },

      {
        path: COURSE_DETAIL,
        element: <CourseDetail />,
      },
      {
        path: PROFILE_PATH,
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: PROFILE_PROJECT_PATH,
            element: <Project />,
          },
          {
            path: PROFILE_COURSE_PATH,
            element: <MyCourse />,
          },
          {
            path: PROFILE_COIN_PATH,
            element: <Coin />,
          },
          {
            path: PROFILE_PAYMENT_PATH,
            element: <Payment />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];
export default router;
