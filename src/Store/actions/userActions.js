import { userServices } from "../../Services/userServices";
import { openNotificationWithIcon } from "../../Utils/notification/notification";
import { USER_LOGIN } from "../../Utils/systemSetting";
import { createActions } from "../constants/createAction";
import {
  USER_SIGNIN,
  FETCH_INFO_USER,
  SET_THONG_TIN_NGUOI_DUNG,
  CAP_NHAT_THONG_TIN_NGUOI_DUNG,
} from "../constants/userConstants";

export const SignInAction = (userLogin, callback) => {
  return (dispatch) => {
    userServices
      .signIn(userLogin)
      .then((res) => {
        localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
        localStorage.setItem("toKen", res.data.content.accessToken);
        dispatch(createActions(USER_SIGNIN, res.data.content));
        callback();
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const SignUpAction = (userNew, callback) => {
  return (dispatch) => {
    userServices
      .signUp(userNew)
      .then((res) => {
        // alert(res.data.message);
        openNotificationWithIcon(`success`, res.data?.message)
        console.log(res);
        callback();
      })
      .catch((err) => {
        openNotificationWithIcon(`error`, err.response.data?.content)
        console.log(err.response.data);
      });
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await userServices.layThongTinNguoiDung();
      if (result.data.statusCode === 200) {
        dispatch(createActions(SET_THONG_TIN_NGUOI_DUNG,result.data.content)
        //   {
        //   type: SET_THONG_TIN_NGUOI_DUNG,
        //   thongTinNguoiDung: result.data.content,
        // }
        );
        console.log("result", result);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const CapNhatThongTinNguoiDung = (user) => {
  return async (dispatch) => {
    try {
      const result = await userServices.CapNhatThongTinNguoiDung(user);
      console.log(result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: CAP_NHAT_THONG_TIN_NGUOI_DUNG,
          newUserInfo: result.data.content,
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
};
