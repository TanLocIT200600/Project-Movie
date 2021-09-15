import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal, Rate } from "antd";
import Layout from "../../HOC/Layout/index.jsx";
import { Col, Typography, Tag, Tabs } from 'antd';
import moment from 'moment';
import './style.css';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { PlayCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { FetchMovieDetailsAction } from "../../Store/actions/QuanLyRapActions";

export default function Detail() {
  const { Title } = Typography;
  const { TabPane } = Tabs;
  const [state, setState] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMovieDetailsAction(params.id))
  }, [dispatch]);
  const filmDetail = useSelector((state) => state.quanLyRapReducers.movieDetail);

  //show modal video
  const showModal = () => {
    setState(true);
  }
  const handleCancel = () => {
    setState(false);
  }
  const handleOk = () => {
    setState(false);
  }

  return <Layout>
    {filmDetail ? <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, width: "100%", height: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <CustomCard
        effectColor="#0ca3d1" // required
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="row-detail">
          <Col className="img_detail" span={4}>
            <img src={filmDetail.hinhAnh} alt={filmDetail.tenPhim} style={{ height: 300, width: "100%" }} />
            <div className="movie__detail"></div>
            <div className="movie_trailer">
              <button onClick={showModal}><PlayCircleOutlined className="play-video" /></button>
              <Modal title={filmDetail.tenPhim} width="50%" footer={null} visible={state} onOk={handleOk} onCancel={handleCancel}>
                <iframe src={filmDetail.trailer} height="500" width="100%" allow="autoplay" frameBorder="0">
                </iframe>
              </Modal>
            </div>
          </Col>
          <Col span={12} className="detail-film">
            <Title className="ngayKhoiChieu" level={5}>{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</Title>
            <div className="row">
              <Tag color="#f50">{filmDetail.maPhim}</Tag>
              <Title level={3} className="tenPhim-detail">{filmDetail.tenPhim}</Title>
            </div>
            <p>Nội dung: {filmDetail.moTa}</p>
          </Col>
          <Col span={8}>
            <div className={`c100 p${filmDetail.danhGia} big`}>
              <span>{filmDetail.danhGia}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <div className="star-rating"><Rate allowHalf value={filmDetail.danhGia / 2} /></div>
          </Col>
        </div>

          <Title>Lịch chiếu</Title>
            <div className="lichChieu">
            <Tabs tabPosition={'left'}>
              {filmDetail ? filmDetail.heThongRapChieu?.map((heThongRapChieu, index) => {
                return <TabPane tab={<div style={{ display:'flex'}}>
                  <img src={heThongRapChieu.logo} alt={heThongRapChieu.maPhim} style={{ width: 70 }} /><p className='tenHeThongRap'>{heThongRapChieu.tenHeThongRap}</p>
                </div>} key={index}>
                  <div className="cumRapChieu">
                    {heThongRapChieu.cumRapChieu?.map((cumRapChieu, index) => {
                      return <div key={index}>
                        <div className='cumRapDetail'>
                          <img src={cumRapChieu.hinhAnh} alt={cumRapChieu.temCumRap} style={{ width: 150,height: 100 }} />
                          <div className='cumRapInfo'>
                          <Title level={5}>{cumRapChieu.tenCumRap}</Title>
                            <p>{cumRapChieu.diaChi}</p>
                            <div className="grid grid-cols-4">
                              {cumRapChieu.lichChieuPhim?.slice(0, 10).map((lichChieuPhim, index) => {
                                return <NavLink to='/' className="col-span-1 gioChieu" key={index}>
                                  {moment(lichChieuPhim.ngayChieuGioChieu).format('hh:mm A')}
                                </NavLink>
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    })}
                  </div>
                </TabPane>
              }) : 'none'}
            </Tabs>
            </div>
      </CustomCard>
    </div> : "detail"}
  </Layout>;
}
