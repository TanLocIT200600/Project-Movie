import { createActions } from "../constants/createAction";
import { bookingServices } from "../../Services/bookingServices";
import { GET_DETAIL_ROOM_TICKET, GET_INFO_BOOKING, DAT_VE_HOAN_TAT, CHUYEN_TAB, SET_GHE_DANG_DAT } from "../constants/bookingConstant";
import { HIDE_LOADING, ON_LOADING } from "../constants/loadingConstanst";
import { openNotificationWithIcon } from "../../Utils/notification/notification";

export const getDetailRoomTicketAction = (maLichChieu) => {
    return async (dispatch) => {
        try
        {
            const result = await bookingServices.getRoomTicket(maLichChieu);
            dispatch(createActions(GET_DETAIL_ROOM_TICKET, result.data.content))
        } catch (err)
        {
            console.log(err?.response);
        }
    }
}

export const bookingTicketAction = (thongTinDatVe) => {
    return async (dispatch, getState) => {
        try
        {
            dispatch(createActions(ON_LOADING))

            const result = await bookingServices.bookingTicket(thongTinDatVe)

            // vì bất đồng bộ nên xử lý bằng đợi load xog getDetailRoomTicketAction rồi dispatch tiếp
            await dispatch(getDetailRoomTicketAction(thongTinDatVe.maLichChieu))
            await dispatch(createActions(DAT_VE_HOAN_TAT))
            openNotificationWithIcon(`success`, result.data.message)
            await dispatch(createActions(CHUYEN_TAB))

            // let taiKhoan = await getState().userReducer.userLogin.taiKhoan

            // await connection.invoke('datGheThanhCong', taiKhoan, thongTinDatVe.maLichChieu)

            dispatch(createActions(HIDE_LOADING))

        } catch (err)
        {
            dispatch(createActions(HIDE_LOADING))
            openNotificationWithIcon(`error`, err.response.data?.content)
            console.log(err);
        }
    }
}

export const getInfoBookingAction = () => {
    return async (dispatch) => {
        try
        {
            const result = await bookingServices.getInfoBooking()
            dispatch(createActions(GET_INFO_BOOKING, result.data.content))
            // console.log(result.data);
        } catch (err)
        {
            console.log(err);
        }
    }
}

export const bookingSeats = (ghe, maLichChieu) => {
    return async (dispatch, getState) => {

        try
        {

            await dispatch(createActions(SET_GHE_DANG_DAT, ghe))
            // lấy taiKhoan từ userReducer về
            // let taiKhoan = getState().userReducer.userLogin.taiKhoan
            // let danhSachGheDangDat = getState().bookingTicketReducer.listSeatSelected

            // danhSachGheDangDat = JSON.stringify(danhSachGheDangDat)

            // //call api signalR
            // connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu)

        } catch (err)
        {
            console.log(err);
        }
    }
}