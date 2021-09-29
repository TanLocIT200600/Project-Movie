import { DOMAIN_CYBER_MOVIE } from '../Utils/systemSetting'
import { requests } from './Api/request'
export const bookingServices = {
    bookingTicket(thongTinDatVe) {
        return requests({
            url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyDatVe/DatVe`,
            method: 'POST',
            data: thongTinDatVe
        })
    },
    getRoomTicket(maLichChieu) {
        return requests({
            url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: 'GET',
        })
    },
    getInfoBooking() {
        return requests({
            url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: 'POST',
        })
    }
}