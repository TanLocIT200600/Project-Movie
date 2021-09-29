import { HIDE_LOADING, ON_LOADING } from "../constants/loadingConstanst";

const initialState = {
    isLoading: false
}

const loadingReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {

        case ON_LOADING:
            state.isLoading = true;
            return { ...state }
        case HIDE_LOADING:
            state.isLoading = false;
            return { ...state }

        default:
            return state
    }
}

export default loadingReducer