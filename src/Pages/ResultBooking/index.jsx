import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoBookingAction } from "../../Store/actions/bookingAction";
import moment from "moment";

function ResultBooking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoBookingAction());
  }, []);

  const infoUser = useSelector(
    (state) => state.userReducer.infoUser
  );

  const renderTicketItem = () => {
    return infoUser.thongTinDatVe?.map((item, index) => {
      return (
        <div key={index} className="flex shadow-md pl-3 py-3">
          <img
            width={60}
            className="object-scale-down h-30 m-2"
            src={item.hinhAnh}
            alt="ticket"
          />
          <div>
            <h3 className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
              {item.tenPhim}
            </h3>
            <h3 className="text-xl font-bold mb-2">
              {item.danhSachGhe[0].tenHeThongRap}
            </h3>
            <h3 className="truncate">
              Ngày chiếu : {moment(item.ngayDat).format("DD/MM/YYYY")} - Giờ
              chiếu {moment(item.ngayDat).format("hh:mm A")}
            </h3>
            <h3>
              Tên rạp : {item.danhSachGhe[0].tenRap} - Ghế : 
              {item.danhSachGhe.map((ghe, index) => {
                return <span className='text-green-600' key={index}> {ghe.tenGhe} </span>;
              })}
            </h3>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="mx-auto max-w-6xl py-12">
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
        <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2">
          <div className="mb-4">
            <h3 className="text-xl font-medium text-black text-center">
              Lịch sử đặt vé khách hàng
            </h3>
            <p class="text-gray-500">
              Bạn có thể kiểm tra thông tin dưới đây và xem phim vui vẻ!.
            </p>
          </div>

          {renderTicketItem()}
        </div>
      </div>
    </section>
  );
}

export default ResultBooking;
