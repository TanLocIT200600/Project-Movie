import { QuanLyRapServices } from "../../Services/QuanLyRapServices";
import { createActions } from "../constants/createAction";
import { SET_FILM_DETAILS, SET_INFO_CINEMA } from "../constants/QuanLyRapConstants";

export const FetchMovieDetailsAction = (id) => {
  return (dispatch) => {
    QuanLyRapServices.ListFilmDetails(id)
      .then((res) => {
        dispatch(createActions(SET_FILM_DETAILS, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};

export const FetchInfoCinema = () => {
  return (dispatch) => {
    QuanLyRapServices.ListInfoCinema()
      .then((res) => {
        dispatch(createActions(SET_INFO_CINEMA, res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
