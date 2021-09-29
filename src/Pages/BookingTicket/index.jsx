import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import srceen from "../../assets/screen.png";
import { Tag } from "antd";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
// import { createActions } from "../../Store/constants/createAction";
// import {
//   DAT_GHE,
//   SET_GHE_DANG_DAT,
// } from "../../Store/constants/bookingConstant";
// import { connection } from "../../index";
import {
  bookingSeats,
  getDetailRoomTicketAction,
} from "../../Store/actions/bookingAction";

function BookingTicket(props) {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userReducer.userLogin);

  const { detailRoomTicket,listSeatSelected } = useSelector(state => state.bookingTicketReducer);
  const { thongTinPhim, danhSachGhe } = detailRoomTicket;

  useEffect(() => {
    dispatch(getDetailRoomTicketAction(props.match.params.id));
    // có 1 user nào đặt vé thành công là sẽ reload lại trang
    // connection.on("datVeThanhCong", () => {
    //   dispatch(getDetailRoomTicketAction(props.match.params.id));
    // });

    //Vừa vào trang sẽ tự động load tất cả ghế của ngưới khác đang đặt
    // connection.invoke("loadDanhSachGhe", props.match.params.id);

    //Load danh sách ghế đang đặt từ sever về (lắng nghe tín hiệu từ sever phát về)
    // connection.on("loadDanhSachGheDaDat", dsGheKhachDat => {
    //   console.log("loadDanhSachGheDaDat", dsGheKhachDat);

    //   //Bước 1 : Loại mình ra khỏi danh sách dsGheKhachDat
    //   dsGheKhachDat = dsGheKhachDat.filter(
    //     item => item.taiKhoan !== userLogin.taiKhoan
    //   );
    //   console.log(dsGheKhachDat);

    //   //Bước 2 : Gộp danh sách ghế khách đặt thành 1 mảng
    //   let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
    //     let arrGhe = JSON.parse(item.danhSachGhe);
    //     return (result = [...result, ...arrGhe]);
    //   }, []);

    //   //--------- lỌC RA NHỮNG GHẾ GIỐNG NHAU TRONG MẢNG (NẾU CÓ)
    //   // arrGheKhachDat = arrGheKhachDat.filter(
    //   //   (item, index) => arrGheKhachDat.indexOf(item) === index
    //   // );

    //   //Bước 3 : Đưa dsGheKhachDat lên redux cập nhật
    //   // dispatch(createActions(DAT_GHE, arrGheKhachDat));
    //   console.log(arrGheKhachDat);
    // });

    //  Cài đặt sự kiện khi reload trang
    // window.addEventListener("beforeunload", clearGhe);

    // // Hoặc khi người dùng chuyển hướng trang khác
    // return () => {
    //   clearGhe();
    //   window.removeEventListener("beforeunload", clearGhe);
    // };
  }, []);

  // const clearGhe = () => {
  //   connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  // };

  const handleSelected = ghe => {
    return () => {
      //dispatch lên serverBackEnd
      dispatch(bookingSeats(ghe, props.match.params.id));
    };
  };

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangChon = "";

      //Kiểm tra ghế đang chọn với danhSachGhe
      let indexGheDangChon = listSeatSelected.findIndex(
        gheDangChon => gheDangChon.maGhe === ghe.maGhe
      );

      // //Kiểm tra ghế khách đang đặt với danhSachGhe
      // let indexGheDangDat = danhSachGheKhachDangDat?.findIndex(
      //   GheDangDat => GheDangDat.maGhe === ghe.maGhe
      // );
      // let classGheDangDat = "";
      // if (indexGheDangDat != -1) {
      //   classGheDangDat = "gheKhachDangDat";
      // }

      let classGheDaDuocMinhDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocMinhDat = "gheDaDuocMinhDat";
      }

      if (indexGheDangChon != -1) {
        classGheDangChon = "gheDangChon";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={handleSelected(ghe)}
            disabled={ghe.daDat }
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangChon} ${classGheDaDuocMinhDat} `}
            key={index}>
            {ghe.daDat ? (
              classGheDaDuocMinhDat != "" ? (
                <UserOutlined style={{ fontSize: "20px" }} />
              ) : (
                <CloseOutlined
                  style={{ fontFamily: "bold", fontSize: "1.3rem" }}
                />
              ) // kiểm tra nếu là khách khác đang chọn sẽ hiện ra iconTeam
            )
              // : classGheDangDat != "" ? (
              // <TeamOutlined style={{ fontSize: "20px" }} />
              // )
                :ghe.stt
            }
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="flex">
      <div
        className="w-4/6 leftBg"
        style={{
          background: `url(${thongTinPhim?.hinhAnh})`}}>
        <img
          className="opacity-0 w-full"
          src={thongTinPhim?.hinhAnh}
          alt="hinhAnh"
        />
      </div>
      <div className="p-4">
        <div className="gird grid-cols-6">
          <div className="flex">
            <img
              style={{ width: 50, height: 50 }}
              src={thongTinPhim?.hinhAnh}
              alt="..."
            />
            <div className="ml-2">
              <h3>
                <span className="text-green-600 font-semibold text-xl">
                  {thongTinPhim?.tenCumRap}
                </span>{" "}
                - {thongTinPhim?.gioChieu} -{" "}
                <Tag className="rounded-xl" color="#fb4226">
                  {thongTinPhim?.tenRap}
                </Tag>
              </h3>
              <h4>Địa điểm - {thongTinPhim?.diaChi}</h4>
            </div>
          </div>
        </div>
        <div className="screen mt-3">
          <img className="w-full" src={srceen} alt="screen" />
        </div>
        <div className="listGhe">{renderSeats()}</div>
        <hr />
        <div className="noteGhe mt-5">
          <ul className="flex flex-wrap justify-center">
            <li className="flex items-center">
              <button className="ghe"></button>
              <span className="font-bold">Ghế chưa đặt</span>
            </li>
            <li className="flex items-center">
              <button className="ghe gheDaDat">
                <CloseOutlined
                  style={{ fontFamily: "bold", fontSize: "1.3rem" }}
                />
              </button>
              <span className="font-bold">Ghế đã đặt</span>
            </li>
            <li className="flex items-center">
              <button className="ghe gheDangChon"></button>
              <span className="font-bold">Ghế đang chọn</span>
            </li>
            <li className="flex items-center">
              <button className="ghe gheDaDuocMinhDat ">
                <UserOutlined style={{ fontSize: "20px" }} />
              </button>
              <span className="font-bold">Ghế đã được mình đặt</span>
            </li>
            {/* <li className="flex items-center">
              <button className="ghe gheKhachDangDat ">
                <UserOutlined style={{ fontSize: "20px" }} />
              </button>
              <span className="font-bold">Ghế Khách Đang Đặt</span>
            </li> */}
            <li className="flex items-center">
              <button className="ghe gheVip "></button>
              <span className="font-bold">Ghế VIP</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookingTicket;
