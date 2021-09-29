import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tag } from "antd";
import { bookingTicketAction } from "../../../Store/actions/bookingAction";
import { InfoTicket } from "../../../models/infoTicket";
import './ticket.css'

function TicketBooking(props) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.userLogin);
  const { detailRoomTicket, listSeatSelected } = useSelector(
    (state) => state.bookingTicketReducer
  );
  const { thongTinPhim, danhSachGhe } = detailRoomTicket;

  const renderSeatsSelected = () => {
    // render sắp xếp từ ghế nhỏ ==> lớn
    return listSeatSelected
      ?.sort((b, a) => b.tenGhe - a.tenGhe)
      .map((ghe, index) => {
        return (
          <span key={index} className="text-lg font-bold">
            {" "}
            {ghe.tenGhe}{" "}
          </span>
        );
      });
  };

  const renderPrice = () => {
    return listSeatSelected
      ?.reduce((totalPrice, ghe, index) => {
        return (totalPrice += ghe.giaVe);
      }, 0)
      .toLocaleString();
  };

  const handleBooking = () => {
    const infoTicket = new InfoTicket();
    infoTicket.maLichChieu = props.match.params.id;
    infoTicket.DanhSachVe = listSeatSelected;     
    dispatch(bookingTicketAction(infoTicket));
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="h-screen ticketBooking">
        <div className="p-4">
          <div className="flex justify-center items-center py-4">
            <span className="text-green-600 text-3xl">
              {" "}
              {renderPrice()} đ.{" "}
            </span>
          </div>
          <hr />
          <div className="flex items-left flex-col my-5">
            <p className="text-black font-bold text-xl">
              {" "}
              {thongTinPhim?.tenPhim}{" "}
            </p>
            <h4>{thongTinPhim?.tenCumRap}</h4>
            <h4>
              {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}-{" "}
              <Tag className="rounded-xl" color="#fb4226">
                {thongTinPhim?.tenRap}
              </Tag>
            </h4>
          </div>
          <hr />
          <div className="flex justify-between items-center my-5">
            <span className="text-red-600">
              {" "}
              Ghế : {renderSeatsSelected()}{" "}
            </span>
            <span className="text-green-600"> {renderPrice()} đ.</span>
          </div>
          <hr />
          <div className="my-5">
            <p className="text-gray-600"> Email: </p>
            <h3> {user?.email} </h3>
          </div>
          <hr />
          <div className="my-5">
            <p className="text-gray-600"> Phone: </p>
            <h3> {user?.soDT} </h3>
          </div>
          <hr />
        </div>
        <div className="divBtn">
          <button
            onClick={handleBooking}
            className="text-center text-white  bg-green-400  hover:bg-green-600 duration-300 shadow-lg block md:inline-block p-5 w-full font-bold">
            {" "}
            ĐẶT VÉ{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketBooking;
