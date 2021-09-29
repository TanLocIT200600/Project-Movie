import { GET_DETAIL_ROOM_TICKET, SET_GHE_DANG_DAT, DAT_VE_HOAN_TAT, CHUYEN_TAB, CHUYEN_TAB_ACTIVE, DAT_GHE } from "../constants/bookingConstant"

const initialState = {
    detailRoomTicket: {},
    listSeatSelected: [],
    tabActive: "1",
    danhSachGheKhachDangDat: [],
}

const bookingTicketReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {

        case GET_DETAIL_ROOM_TICKET:
            state.detailRoomTicket = payload
            return { ...state }
        case SET_GHE_DANG_DAT:
            let cloneGheDangDat = [...state.listSeatSelected];

            let findIndex = cloneGheDangDat.findIndex(
                item => item.maGhe === payload.maGhe
            );

            // chưa có sẽ là findIndex = -1 nếu có rồi sẽ là 1
            if (findIndex != -1)
            {
                cloneGheDangDat.splice(findIndex, 1);
            } else
            {
                cloneGheDangDat = [...cloneGheDangDat, payload];
            }
            state.listSeatSelected = cloneGheDangDat
            return { ...state }
        case DAT_VE_HOAN_TAT:
            state.listSeatSelected = []
            return { ...state }
        case CHUYEN_TAB:
            state.tabActive = "2";
            return { ...state }
        case CHUYEN_TAB_ACTIVE:
            state.tabActive = payload;
            return { ...state }
        case DAT_GHE:
            state.danhSachGheKhachDangDat = payload;
            return { ...state }

        default:
            return state
    }
}

export default bookingTicketReducer