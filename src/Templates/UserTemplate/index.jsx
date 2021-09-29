import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./style.css";

function UserTemplate(props) {
  const { Component, ...restParams } = props;

  useEffect(() => {
    window.scrollTo(0,0)
  })

  //...restParams các thuộc tính còn lại như path,render
  return (
    <Route {...restParams}
      render={(restRoute) => {
        return (
          <div className="bg-image h-screen flex flex-col justify-center items-center">
            <Component {...restRoute} />
          </div>
        );
      }}></Route>
  );
}

export default UserTemplate;
