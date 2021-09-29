import React, { useEffect } from "react";
import Header from "../../Components/Header";
import { Col, Typography } from "antd";
import { useSelector } from "react-redux";
import "./style.css";

function Layout(props) {
  const { Title } = Typography;
  const cinema = useSelector((state) => state.quanLyRapReducers.listInfoCinema);

  return (
    <div className="template">
      <Header />
      <div className="body">{props.children}</div>
      <div className="footer">
        <div className="containerLayout">
          <div className="row">
            <Col span={8}>
              <Title level={4} style={{fontWeight: 300}}>Tix</Title>
              <div className="tix-col">
                <Col span={12} style={{color: '#949494'}}>FAQ</Col>
                <Col span={12} style={{color: '#949494'}}>Thỏa thuận sử dụng</Col>
              </div>
              <div className="tix-col">
                <Col span={12} style={{color: '#949494'}}>Brand Guidelines</Col>
                <Col span={12} style={{color: '#949494'}}>Chính sách bảo mật</Col>
              </div>
            </Col>
            <Col span={8}>
              <Title level={4} style={{fontWeight: 300}}>Đối tác</Title>
              <div className="logo-col">
                {cinema ? cinema?.map((item) => (
                  <img key={item.maHeThongRap} src={item.logo} alt={item.maHeThongRap} style={{ width: 30, marginRight: 20 }} />
                )) : 'không tồn tại'}
              </div>
              <div className="logo-col" style={{marginTop:20}}>
                <img src="https://tix.vn/app/assets/img/icons/bt.jpg" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/dongdacinema.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/TOUCH.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/cnx.jpg" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/STARLIGHT.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/zalopay_icon.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
              </div>

              <div className="logo-col" style={{marginTop:20}}>
                <img src="https://tix.vn/app/assets/img/icons/payoo.jpg" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/123go.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/laban.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/VCB.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/VIETTINBANK.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
                <img src="https://tix.vn/app/assets/img/icons/dcine.png" alt="11" style={{ width: 30, height: 30, marginRight: 20, borderRadius: "50%" }} />
              </div>
            </Col>
            <Col span={4}>
              <Title level={4} style={{fontWeight: 300}}>MOBILE APP</Title>
              <div className="mobile-col">
                <img
                  src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                  alt="logo"
                  style={{ width: 30, marginRight: 20 }}
                />
                <img
                  src="https://tix.vn/app/assets/img/icons/android-logo.png"
                  alt="logo"
                  style={{ width: 30, marginRight: 20 }}
                />
              </div>
            </Col>
            <Col span={4}>
              <Title level={4} style={{fontWeight: 300}}>SOCIAL</Title>
              <div className="social-col">
                <img
                  src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                  alt="logo"
                  style={{ width: 30, marginRight: 20 }}
                />
                <img
                  src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                  alt="logo"
                  style={{ width: 30, marginRight: 20 }}
                />
              </div>
            </Col>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
}

export default Layout;
