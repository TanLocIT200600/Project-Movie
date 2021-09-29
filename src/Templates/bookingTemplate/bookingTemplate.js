import React, { useEffect } from "react";
import { Fragment } from "react";
import { Redirect, Route, NavLink } from "react-router-dom";
import TicketBooking from "./ticketBooking";
import { useDispatch, useSelector } from "react-redux"
import { getDetailRoomTicketAction } from "../../Store/actions/bookingAction";
import { Tabs, Tooltip, Avatar } from 'antd';
import { UserOutlined, DollarOutlined, TagsOutlined, HomeOutlined } from "@ant-design/icons";
import ResultBooking from "../../Pages/ResultBooking";
import { createActions } from "../../Store/constants/createAction";
import { CHUYEN_TAB_ACTIVE } from "../../Store/constants/bookingConstant";
import './booking.css'
const { TabPane } = Tabs;


function BookingTemplate(props) {
  const dispatch = useDispatch();
  const { Component, ...restParams } = props;

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      dispatch(createActions(CHUYEN_TAB_ACTIVE, '1'))
    }
  }, [])


  const { tabActive } = useSelector(state => state.bookingTicketReducer)

  //---------- Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    localStorage.removeItem("toKen");
    window.location.reload();
  };

  const text = <NavLink to="/" onClick={handleLogout} className="mx-4">
    Đăng xuất
  </NavLink>


  const userLogin = useSelector(state => state.userReducer.userLogin)
  const operations = <div className="flex justify-end items-center cursor-pointer mr-3">
    <Tooltip placement="bottom" title={text}>
      <Avatar
        style={{ backgroundColor: "#80808063", lineHeight: "22px" }}
        icon={<UserOutlined />}
      />
      <span className="ml-3">{userLogin?.hoTen}</span>
    </Tooltip>
  </div>

  //---------- Xử lý đăng xuất


  const onChangeTab = (key) => {
    dispatch(createActions(CHUYEN_TAB_ACTIVE, key))
  }


  if (!localStorage.getItem("USER_LOGIN"))
  {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Route
        {...restParams}
        render={(propsRoute) => {
          return (
            <Fragment>
              <div className="grid grid-cols-4 h-full">
                <div className="col-span-3">
                  <Tabs defaultActiveKey='1' activeKey={tabActive} onChange={onChangeTab} tabBarExtraContent={operations} className="">
                    <TabPane tab={<span> <DollarOutlined style={{ fontSize: 25, margin: '10px 10px 10px 0' }} /> CHỌN GHẾ & THANH TOÁN </span>} key="1">
                      <Component {...propsRoute} />
                    </TabPane>
                    <TabPane tab={<span> <TagsOutlined style={{ fontSize: 25, margin: '10px 10px 10px 0' }} /> KẾT QUẢ ĐẶT VÉ </span>} key="2">
                      <ResultBooking {...propsRoute} />
                    </TabPane>
                    <TabPane tab={
                      <NavLink to='/'>  <HomeOutlined style={{ fontSize: 25, margin: '10px 10px 10px 0' }} />TRANG CHỦ </NavLink>} key="3">
                    </TabPane>
                  </Tabs>
                </div>
                <TicketBooking {...propsRoute} />
              </div>
            </Fragment>
          );
        }}
      />
    </>
  );
}

export default BookingTemplate;
