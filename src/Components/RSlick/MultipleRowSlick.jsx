import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../Store/constants/movieConstants";
import { NavLink } from "react-router-dom";
import "./MultipleRowSlick.module.css";
import styleSlick from "./MultipleRowSlick.module.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.css";
import { Modal, Button } from 'antd';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    />
  );
}

export default function MultipleRowSlick(props) {
  const dispatch = useDispatch();
  const arrFilm = useSelector((state) => state.movieReducers.arrFilm);
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.movieReducers.arrFilm
  );

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  console.log("arrFilm", arrFilm);
  let phimDangChieu = dangChieu === true ? "active_Film" : "none_active_Film";
  let phimSapChieu = sapChieu === true ? "active_Film" : "none_active_Film";

  const [visible, setVisible] = useState(false);
  const [curPhim,setCurPhim] = useState(null);

  return (
    <div>
      <Button
        className={`${styleSlick[phimDangChieu]}`}
        style={{ marginRight: 10, marginBottom: 10 }}
        type="primary"
        danger
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        Phim Đang chiếu
      </Button>
      <Button
        className={`${styleSlick[phimSapChieu]}`}
        type="primary"
        danger
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        Phim Sắp chiếu
      </Button>
      <Slider {...settings}>
        {arrFilm ? arrFilm.slice(0, 20).map((phim, index) => {
          return (
            <div key={index} className="flip-card px-2">
              <div className="flip-card-front" style={{ background: `url(${phim.hinhAnh})` }}>
                <img src={phim.hinhAnh} className="opacity-0 w-full imd-detail-mul" alt="Avatar" />
                <div className="movie-detail-mul"></div>
                <div className="movie-trailer-mul">
                  <button onClick={() => {
                    setVisible(true) 
                    setCurPhim(phim)
                  }}>
                    <PlayCircleOutlined className="play-video-mul" />
                  </button>
                  {curPhim && <Modal title={curPhim.tenPhim} centered visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} width={700}
                  footer={null}>
                    <iframe src={curPhim.trailer} height="500" width="100%" allow="autoplay" frameBorder="0"></iframe>
                  </Modal>}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <NavLink className="movie_detail" to={`/detail/${phim.maPhim}`}>
                  <b>Detail</b>
                </NavLink>
              </div>
              {phim.hot ? <button className="btn_hot">HOT</button> : <></>}
            </div>
          );
        })
          : "none"}
      </Slider>
    </div>
  );
}
