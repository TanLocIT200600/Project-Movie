import { DOMAIN_CYBER_MOVIE } from '../Utils/systemSetting'
import {requests} from './Api/request'

export const QuanLyRapServices = {
  ListFilmDetails(id){
    return requests({
      url:`${DOMAIN_CYBER_MOVIE}/api/QuanLyRap/LayThongTinLichChieuPhim`,
      method:'GET',
      params: {
        MaPhim: id,
      },
    })
  },
  ListInfoCinema(){
    return requests({
      url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
      method: "GET",
    })
  }
}