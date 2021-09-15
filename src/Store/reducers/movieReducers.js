import {
  SET_MOVIES_LIST,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_BANNER_LIST
} from "../constants/movieConstants";

const stateDefault = {
  bannerList:[],
  arrFilm: [],
  arrFilmDefault: [],
  dangChieu: true,
  sapChieu:true,
};

export const movieReducers = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case SET_BANNER_LIST:
      state.bannerList = payload;
      return {...state};

    case SET_MOVIES_LIST:
      state.arrFilm = payload;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };

    case SET_FILM_DANG_CHIEU:
      state.dangChieu = !state.dangChieu;
      state.arrFilm =state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
      return { ...state };
    
      case SET_FILM_SAP_CHIEU:
        state.sapChieu = !state.sapChieu;
        state.arrFilm =state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
        return { ...state };

    default:
      return state;
  }
};
