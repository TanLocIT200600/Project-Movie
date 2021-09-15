import { SET_FILM_DETAILS, SET_INFO_CINEMA } from "../constants/QuanLyRapConstants";
const stateDefault = {
  movieDetail: null,
  listInfoCinema:[],
};
export const quanLyRapReducers = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case SET_FILM_DETAILS:
      state.movieDetail = payload;
      return { ...state };

    case SET_INFO_CINEMA:
      state.listInfoCinema = payload;
      return { ...state };
      
    default:
      return state;
  }
};
