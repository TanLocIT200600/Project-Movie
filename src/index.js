import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DOMAIN_CYBER_MOVIE } from './Utils/systemSetting'

//Cấu hình realtime (websocket với signalR)
// import * as signalR from '@aspnet/signalr'

//set up store
import { Provider } from 'react-redux';
import store from "./Store/storeConfigs"

// Đoạn code kết nối đến sever để lắng nghe sự kiện từ sever
// export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN_CYBER_MOVIE}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

// connection.start().then(() => {
// }).catch(err => {
//   console.log(err);
// })
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
