import React from 'react'
import Header from '../../Components/Header'
import { Col, Typography } from 'antd';
import { useSelector } from 'react-redux';
import './style.css'


function Layout(props) {
  const { Title } = Typography;
  const cinema = useSelector((state) => state.cinema);

  return (
    <div className="template">
      <Header />
      <div className="body">
        {props.children}
      </div>
      <div className="footer">
        <div className="container">
          <div className='row'>
            <Col span={8}>
              <Title level={4}>Tix</Title>
              <div className="tix-col">
                <Col span={12}>FAQ</Col>
                <Col span={12}>Thỏa thuận sử dụng</Col>
              </div>
              <div className="tix-col">
                <Col span={12}>Brand Guidelines</Col>
                <Col span={12}>Chính sách bảo mật</Col>
              </div>
            </Col>
            <Col span={8}>
              <Title level={4}>Đối tác</Title>
              <div className="logo-col">
                {cinema ? cinema.cinemaList?.map((item) => (
                  <img key={item.maHeThongRap} src={item.logo} alt={item.maHeThongRap} style={{ width: 30, marginRight:20 }} />
                )) : 'không tồn tại'}
              </div>
            </Col>
            <Col span={4}>
              <Title level={4}>MOBILE APP</Title>
              <div className="mobile-col">
                <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="logo" style={{ width: 30, marginRight:20 }} />
                <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="logo" style={{ width: 30, marginRight:20 }} />
              </div>
            </Col>
            <Col span={4}>
              <Title level={4}>SOCIAL</Title>
              <div className="social-col">
                <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="logo" style={{ width: 30, marginRight:20 }} />
                <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="logo" style={{ width: 30, marginRight:20 }} />
              </div>
            </Col>
          </div>
        </div>
        <p>&copy; {(new Date().getFullYear())} All rights reserved</p>
      </div>
    </div>
  )
}

export default Layout
