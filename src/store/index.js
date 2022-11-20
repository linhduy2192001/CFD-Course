import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";
/**
 * B1: tạo store
 * B2 : gắn store vào React bằng thư viện react-redux
 * B3: sử dụng useSelector để lấy dữ liệu từ store
 * B4: sử dụng useDispatch để dispatch 1 action vào trong store
 */

const reducers = combineReducers({
  auth: authReducer,
});
const logger = (store) => (next) => (action) => {
  console.log("action :>> ", action);
  next(action);
};

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };
const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
