import React, { useEffect, useState } from "react";
import { Tabs, Input, Button, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  CapNhatThongTinNguoiDung,
  layThongTinNguoiDungAction,
} from "../../Store/actions/userActions";
import moment from "moment";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logoSignIn from "../../assets/logoSignIn.png";
import './style.css'

const { TabPane } = Tabs;
const { Text } = Typography;

export default function Profile(props) {
  const dispatch = useDispatch();

  const { userLogin, thongTinNguoiDung, newUserInfo, infoUser } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);

  const [user, setUser] = useState({
    taiKhoan: userLogin.taiKhoan,
    email: newUserInfo.email ?? userLogin.email ?? thongTinNguoiDung.email,
    soDt: newUserInfo.soDT ?? userLogin.soDT ?? thongTinNguoiDung.soDt,
    maNhom: newUserInfo.maNhom ?? thongTinNguoiDung.maNhom,
    matKhau:  thongTinNguoiDung.matKhau,
    maLoaiNguoiDung: newUserInfo.maLoaiNguoiDung ?? userLogin.maLoaiNguoiDung ?? thongTinNguoiDung.maLoaiNguoiDung,
    hoTen: newUserInfo.hoTen ?? userLogin.hoTen ?? thongTinNguoiDung.hoTen,
  });

  const renderInfoUser = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((info) => {
      return (
        <div key={info.maVe} className="max-w-sm w-full lg:max-w-full lg:flex mb-3">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${info.hinhAnh})` }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-l mb-2">
                {info.tenPhim}
              </div>
              <p className="text-gray-700 text-base">
                <b className="mr-2">Ng??y ?????t:</b>
                {moment(info.ngayDat).format("dd-mm-yyyy")}
              </p>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  <b className="mr-2">Gi?? v??:</b>
                  {info.giaVe}
                  <span className="ml-1">VN??</span>
                </p>
                <p className="text-gray-600">
                  <b className="mr-2">Th???i l?????ng phim:</b>
                  {info.thoiLuongPhim}
                  <span className="ml-1">ph??t</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({user});
    dispatch(CapNhatThongTinNguoiDung(user));
  };

  return (
    <Tabs defaultActiveKey="1" className="profileTabs">
      <TabPane tab="Th??ng tin c?? nh??n" key="1">
        <form onSubmit={handleSubmit} className="signIn-form sm:container rounded-lg" >
          <NavLink to="/"><img className="logoLogin" src={logoSignIn} alt="logo" /></NavLink>
          <NavLink to="/" exact className="btnClose text-center"><CloseOutlined /></NavLink>
          <div className="mb-2">
            <Text className="text-gray-500" strong> Username: </Text>
            <Input name="taiKhoan" size="large" prefix={<UserOutlined />} onChange={handleChange} value={userLogin.taiKhoan} />
          </div>
          <div className="mb-2">
            <Text className="text-gray-500" strong>
              {" "}
              FullName:
            </Text>
            <Input name="hoTen" size="large" prefix={<UserOutlined />} onChange={handleChange} value={user.hoTen} />
          </div>
          <div className="mb-2">
            <Text className="text-gray-500" strong> Password: </Text>
            <Input.Password name="matKhau" size="large" prefix={<LockOutlined />} onChange={handleChange} value={user.matKhau} />
          </div>
          <div className="mb-2">
            <Text className="text-gray-500" strong>
              Email:
            </Text>
            <Input name="email" size="large" prefix={<MailOutlined />} onChange={handleChange} value={user.email} />
          </div>
          <div className="mb-2">
            <Text className="text-gray-500" strong> Phone: </Text>
            <Input name="soDt" size="large" prefix={<PhoneOutlined />} onChange={handleChange} value={user.soDt} />
          </div>
          <div className="mb-2">
            <Text className="text-gray-500" strong> GroupID: </Text>
            <Input name="maNhom" size="large" prefix={<UserOutlined />} onChange={handleChange} value={user.maNhom} />
          </div>

          <Button className="btnLogin my-3" htmlType="submit" type="primary" block >
            L??u thay ?????i
          </Button>
        </form>
      </TabPane>
      <TabPane tab="L???ch s??? ?????t v?? " key="2">
        <div className="grid grid-rows-3 grid-flow-col gap-4" style={{marginBottom:10}}>
          <div>{renderInfoUser()}</div>
        </div>
      </TabPane>
    </Tabs>
  );
}
