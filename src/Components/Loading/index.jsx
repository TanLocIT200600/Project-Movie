import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loadingpng from "../../assets/loading-2.gif";

function Loading() {
  const { isLoading } = useSelector(state => state.loadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <div
          className="flex items-center justify-center h-screen w-screen"
          style={{ position: "fixed", backgroundColor: "rgb(0 0 0 / 25%)" }}>
          <img src={Loadingpng} alt="loading"></img>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Loading;
