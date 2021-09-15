import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Button,Typography } from "antd";
import {SET_FILM_DANG_CHIEU,SET_FILM_SAP_CHIEU} from '../../Store/constants/movieConstants'
import { NavLink } from "react-router-dom";
import './MultipleRowSlick.module.css';
import styleSlick from './MultipleRowSlick.module.css';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", left: '-50px' }}
      onClick={onClick}
    />
  );
}

export default function MultipleRowSlick(props) {
  const dispatch = useDispatch();
  const arrFilm = useSelector((state) => state.movieReducers.arrFilm);
  const {dangChieu,sapChieu} = useSelector((state) => state.movieReducers.arrFilm);
  

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  console.log('arrFilm', arrFilm);
  const { Text } = Typography;
  let phimDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film';
  let phimSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film';

  return (
    <div>
      <Button className={`${styleSlick[phimDangChieu]}`} style={{marginRight:10,marginBottom:10}} type="primary" danger onClick={() =>{
        const action = {type:SET_FILM_DANG_CHIEU}
        dispatch(action);
      }}>Phim Đang chiếu</Button>
      <Button className={`${styleSlick[phimSapChieu]}`} type="primary" danger onClick={() =>{
        const action = {type:SET_FILM_SAP_CHIEU}
        dispatch(action);
      }}>Phim Sắp chiếu</Button>
      <Slider {...settings}>
        {arrFilm? arrFilm.slice(0,12).map((phim,index) =>{
          return <div key={index} className="flip-card">
            <div className="flip-card-front">
              <img src={phim.hinhAnh} alt="Avatar" style={{ width: 265, height: 300 }} />
            </div>
            {phim.hot? <button className="btn_hot">HOT</button>: <></>}
           <NavLink className="movie_detail" to={`/detail/${phim.maPhim}`}><b>Detail</b></NavLink>
         </div>
        }):'none'}
      </Slider>
    </div>
  );
}