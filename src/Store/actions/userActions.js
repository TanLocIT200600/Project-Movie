import { userServices } from "../../Services/userServices";
import { createActions } from "../constants/createAction";
import { USER_SIGNIN } from '../constants/userConstants'

export const SignInAction = (userLogin,callback) => {
    return (dispatch) => {
        userServices.signIn(userLogin)
            .then((res) => {
                localStorage.setItem('toKen', res.data.content.accessToken)
                dispatch(createActions(USER_SIGNIN, res.data.content))
                callback();
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }
}


export const SignUpAction = (userNew,callback) => {
    return (dispatch) => {
        userServices.signUp(userNew)
            .then((res) => {
                alert(res.data.message);
                callback();
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }
}