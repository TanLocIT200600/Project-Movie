import { movieServices } from "../../Services/movieServices";
import { createActions } from "../constants/createAction";
import { SET_MOVIES_LIST, SET_BANNER_LIST } from "../constants/movieConstants";

export const FetchListMovieAction = () => {
  return (dispatch) => {
    movieServices
      .ListFilm()
      .then((res) => {
        dispatch(createActions(SET_MOVIES_LIST, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};

export const FetchListBannerActions = () => {
  return (dispatch) => {
    movieServices
      .ListBanner()
      .then((res) => {
        dispatch(createActions(SET_BANNER_LIST, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
