import React from 'react'
import { Tabs, Card } from 'antd';
import { LikeTwoTone, MessageTwoTone } from '@ant-design/icons'
import Layout from '../../HOC/Layout/index'
import './style.css'

const { TabPane } = Tabs;
const { Meta } = Card;

export default function News(props) {
  return (
      <>
      <Tabs defaultActiveKey="1" style={{marginTop:'5%'}} className="tabNews">
      <TabPane tab="Điện Ảnh 24h" key="1" className="tabItems">
        
        <div className="row">
          <Card hoverable style={{ width: 550 }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png" />}>
            <Meta title="Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất " description="Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ" />
          </Card>

          <Card hoverable style={{ width: 550, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png" />}>
            <Meta title="[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM" description="Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.  " />
          </Card>
          </div>
        
          <div className="row">
          <Card hoverable style={{  width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" />}>
            <Meta title="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM" description="Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới." />
            
          </Card>
          <Card hoverable style={{  width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/nguoi-nhan-ban-seobok-c18-16170933054901_215x318.jpg" />}>
            <Meta title="Người Nhân Bản - Seobok" description="Người Nhân Bản kể về Ki-hun – một cựu đặc vụ sống tách biệt với thế giới bên ngoài kể từ sau biến cố trong quá khứ, chấp nhận thực hiện nhiệm vụ cuối cùng từ Cơ quan Tình báo. Anh phải chịu trách nhiệm di chuyển Seobok, một đối tượng thử nghiệm được tạo ra bằng cách nhân bản tế bào gốc và biến đổi gen." />

          </Card>
          <Card hoverable style={{  width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/mobile/123phim/2021/03/thien-than-ho-menh-16157907251398_215x318.jpg" />}>
            <Meta title="Thiên Thần Hộ Mệnh - The Guardian" description="Cái chết của một cô ca sĩ nổi tiếng dẫn đến sự thành công của một cô ca sĩ trẻ khác. Câu chuyện này có liên quan như thế nào đến sự giúp đỡ của một 'thiên thần hộ mệnh ?' "/>
          
          </Card>
        </div>

      </TabPane>
      
      <TabPane tab="Review" key="2">
        <div className="row">
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" />}>
          <Meta title="Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết" description="Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám" />
        </Card>
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png" />}>
          <Meta title="Review: Dinh Thự Oan Khuất (Ghost Of War)" description="Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!" />
        </Card>
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/mobile/123phim/2021/05/hung-than-trang-great-white-c13-16199525115620_215x318.png" />}>
          <Meta title="Hùng Thần Trắng - Great White - C18" description="Hung Thần Trắng là bộ phim kể về vụ truy sát kinh hoàng bởi loài cá mập trắng khổng lồ diễn ra tại Hell’s Reef, cách xa bờ 200 dặm đã khiến nhiều người thiệt mạng. Một nhóm người đang đi nghỉ mát. Kỳ nghỉ trong mơ bỗng biến thành thảm kịch khi cả 5 người phải giành giật sự sống chỉ với một chiếc phao cứu hộ giữa biển cả mênh mông và kẻ săn mồi trực diện chính là hung thần khát máu thống trị đại dương." />
        </Card>
        </div>

        <div className="row">
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png" />}>
          <Meta title="‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh" description="Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay." />
        </Card>
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png" />}>
          <Meta title="American Sniper - Chính nghĩa hay phi nghĩa?" description="American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng..." />
        </Card>
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/04/Untitled-1-af24d1.jpg" />}>
          <Meta title="Hùng Thần Trắng - Great White - C18" description="Đây là một bộ phim hoạt hình nên không  thể đòi hỏi mặt hình ảnh đồ họa của nó giống với một bộ phim người đóng.  Nhưng cũng chính vì việc là một phim hoạt hình nên nó có những thứ mà  một bộ phim người đóng không thể có, những tiếng lật trang từ một quyển  comic, những bong bóng chữ như lời thoại hiện lên khiến chúng ta như bị  đắm chìm vào một cuốn comic thực sự." />
        </Card>
        </div> 
      </TabPane>


      <TabPane tab="Khuyến Mãi" key="3">
        <div className="row">
        <Card hoverable style={{  width: 550, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg" />}>
          <Meta title="TIX 1K/VÉ NGẠI CHI GIÁ VÉ" description="Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga" />
        </Card>
        <Card hoverable style={{  width: 550, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg" />}>
          <Meta title="BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!" description="Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay." />
        </Card>
        </div>
        <div className="row">
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png" />}>
          <Meta title="ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX" description="ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX." />
        </Card>
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" />}>
          <Meta title="Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn" description="Rạp Beta Cinemas Quang Trung tọa lạc tại số 645 Quang Trung, Phường 11, Quận Gò Vấp, Thành phố Hồ Chí Minh là điểm đến lý tưởng cho các tín đồ “đam mê điện ảnh nhưng vẫn không quên sống ảo”.  " />
        </Card>
        <Card hoverable style={{ width: 350, marginLeft:'1%' }} cover={<img alt="example" src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png" />}>
          <Meta title="[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay" description="Trong thời gian khuyến mãi, mỗi giao dịch đặt vé Pháp Sư Mù: Ai Chết Giơ Tay trên ứng dụng 123Phim có nhập mã PSM30K sẽ được giảm 30k trên tổng giao dịch." />
        </Card>
        </div>
      </TabPane>
    </Tabs>
  </>
    )
}
