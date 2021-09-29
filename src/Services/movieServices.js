import { DOMAIN_CYBER_MOVIE } from '../Utils/systemSetting';
import {requests} from './Api/request';

export const movieServices = {
  ListFilm(){
    return requests({
      url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method:'GET',
    })
  },
  ListBanner(){
    return requests({
      url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
    })
  }
}