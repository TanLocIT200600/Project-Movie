import { USER_SIGNIN } from "../constants/userConstants"

const initialState = {
    userLogin: {}
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGNIN:
        state.userLogin = payload
        return { ...state }

    default:
        return state
    }
}
