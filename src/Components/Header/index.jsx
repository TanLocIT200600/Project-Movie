import React from "react";
import { Image, Layout, Menu } from "antd/lib";
import { NavLink } from "react-router-dom";
import "./style.css"

export default function Header() {
  return (
    <Layout>
      <Menu mode="horizontal" className="bgColor">
        <div className="menuItem">
          <Menu.Item key="logo">
            <Image className="logo" src="https://tix.vn/app/assets/img/icons/web-logo.png" />
          </Menu.Item>
        </div>
        <div className="menuItem">
          <Menu.Item key="HOME"><NavLink exact to="/">HOME</NavLink></Menu.Item>
          <Menu.Item key="NEWS"><NavLink exact to="/">NEWS</NavLink></Menu.Item>
          <Menu.Item key="CONTACT"><NavLink exact to="/">CONTACT</NavLink></Menu.Item>
          <Menu.Item key="ABOUT"><NavLink exact to="/">ABOUT</NavLink></Menu.Item>
        </div>
        <div className="menuItem">
          <Menu.Item key="HOME"><NavLink exact to="/signin">SIGN IN</NavLink></Menu.Item>
          <Menu.Item key="NEWS"><NavLink exact to="/signup">SIGN UP</NavLink></Menu.Item>
        </div>

      </Menu>

    </Layout>
  );
}
