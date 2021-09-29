import React, { useEffect } from "react";
import { Image, Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Tooltip, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import { useHistory } from "react-router";

export default function Header(props) {
  const history = useHistory();
  const userLogin = useSelector(state => state.userReducer.userLogin);

  // console.log(userLogin);
  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    localStorage.removeItem("toKen");
    window.location.reload();
  };

  const text = (
    <NavLink to="/" onClick={handleLogout} className="mx-4">
      Đăng xuất
    </NavLink>
  );

  const renderUser = () => {
    if (userLogin?.hoTen) {
      return (
        <>
          <div className="flex justify-end items-center cursor-pointer">
            <Tooltip placement="bottom" title={text}>
              <Avatar
                style={{ backgroundColor: "#80808063", lineHeight: "22px" }}
                icon={<UserOutlined />}
              />
              <span className="ml-3">{userLogin?.hoTen}</span>
            </Tooltip>
            <span
              style={{
                border: "1px solid #e9e9e9",
                height: 25,
                margin: "0 10px",
              }}></span>
            <button
              onClick={() => {
                history.push("/profile");
              }}
              className="tracking-wider hover:text-red-600 transition duration-300">
              {" "}
              PROFILE{" "}
            </button>
          </div>
        </>
      );
    } 
      return (
        <>
          <Menu.Item key="HOME">
            <NavLink className="tracking-wider" exact to="/signin">
              SIGN IN
            </NavLink>
          </Menu.Item>
          <Menu.Item key="NEWS">
            <NavLink className="tracking-wider" exact to="/signup">
              SIGN UP
            </NavLink>
          </Menu.Item>
        </>
      );
  };

  return (
    <>
      <Menu mode="horizontal" className="bgColor">
        <div className="menuItem">
          <Menu.Item key="logo">
            <Image
              className="logo"
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
            />
          </Menu.Item>
        </div>
        <div className="menuItem">
          <Menu.Item key="HOME">
            <NavLink className="tracking-wider" exact to="/">
              HOME
            </NavLink>
          </Menu.Item><Menu.Item key="Cinema">
            <NavLink className="tracking-wider" exact to="/">
              CINEMA
            </NavLink>
          </Menu.Item>
          <Menu.Item key="NEWS">
            <NavLink className="tracking-wider" exact to="/news">
              NEWS
            </NavLink>
          </Menu.Item><Menu.Item key="App">
            <NavLink className="tracking-wider" exact to="/">
              APP
            </NavLink>
          </Menu.Item>
        </div>
        <div className="menuItem">{renderUser()}</div>
      </Menu>
    </>
  );
}
