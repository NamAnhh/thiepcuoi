import { Helmet } from "react-helmet";
import "./App.scss";
import icArrow from "./assets/images/icArrow.svg";
import icHoa from "./assets/images/icHoa.svg";
import imgQRcode from "./assets/images/imgQRcode.jpg";
import icScrollToBottom from "./assets/images/icScrollToBottom.svg";

import bg1 from "./assets/images/bg1.jpg";
import bg2 from "./assets/images/bg2.jpg";
import bg3 from "./assets/images/bg3.jpg";

import item1 from "./assets/images/item1.jpg";
import item2 from "./assets/images/item2.jpg";
import item3 from "./assets/images/item3.jpg";
import item4 from "./assets/images/item4.jpg";
import item5 from "./assets/images/item5.jpg";

import bgDresscode from "./assets/images/bgDresscode.png";
import bgLichTrinh from "./assets/images/bgLichTrinh.png";

const listBottomImages = [item1, item2, item3, item4, item5];
const addressLink =
  "https://www.google.com/maps/place/Khu+%C4%91%C3%B4+th%E1%BB%8B+Times+City,+V%C4%A9nh+Tuy,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9943875,105.8581637,16z/data=!3m1!4b1!4m6!3m5!1s0x3135ac1b32177d79:0xde093f29474d98c8!8m2!3d20.9945438!4d105.8677181!16s%2Fg%2F12326df9?hl=vi-VN&entry=ttu";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className='main-content'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Đám cưới Nam Anh - Hồng Hạnh</title>
        <meta name='description' content='Đám cưới chúng mình...' />
        <link rel='canonical' href={bg1} />
      </Helmet>
      {/* cover 1 */}
      <div className='cover1'>
        <img src={bg1} alt='' />
        <div className='cover-text'>
          <div className='text1'>delighted</div>
          <div className='text1'>to share our</div>
          <div className='text2'>upcoming</div>
          <div className='text2'>wedding</div>
        </div>
      </div>
      {/* end cover 1 */}
      {/* cover 2 */}
      <div className='cover2'>
        <div className='cover-text'>
          <div className='text1'>
            All beings are flowers blooming in a blossoming universe.
          </div>
        </div>
        <img src={bg2} alt='' />
      </div>
      {/* end cover 2 */}
      {/* cover 3 */}
      <div className='cover3'>
        <img src={bg3} alt='' />
      </div>
      {/* end cover 3 */}
      {/* section 4 */}
      <div className='section4'>
        <div className='header'>THÂN MỜI,</div>
        <div className='row'>
          <img src={icHoa} alt='' />
          <div className='content'>
            <div className='text1'>Thời gian:</div>
            <div className='text1 bold'>11:30 AM</div>
            <div className='text1 bold'>Thứ 7, 18 • 11 • 2023</div>
            <div className='text1 description'>
              Ngày 06 tháng 10 năm Quý Mão
            </div>
          </div>
        </div>

        <div className='row'>
          <img src={icHoa} alt='' />
          <div className='content'>
            <div className='text1'>Địa điểm:</div>
            <div className='text1 bold'>Trung tâm Hội nghị</div>
            <div className='text1 bold'>Tiệc cưới Forevermark</div>
            <div className='text1 description'>
              614 Đ. Lạc Long Quân, Nhật Tân
            </div>
          </div>
        </div>
        <div className='wrapDinhVi'>
          <div className='btnDinhVi'>
            <a href={addressLink} target='_blank' rel='noreferrer'>
              Định vị
            </a>
          </div>
        </div>
      </div>
      {/* end section 4 */}
      {/* section 5 */}
      <div className='section5'>
        {listBottomImages.map((item) => {
          return (
            <div className='row' key={item}>
              <img src={item} alt='' />
            </div>
          );
        })}
      </div>
      {/* end section 5 */}
      {/* section 6 */}
      <div className='section6'>
        <img src={bgLichTrinh} alt='' />
        <div className='wrapDesscode'>
          <img src={bgDresscode} alt='' />
        </div>
      </div>
      {/* end section 6 */}
      {/* section 7 */}
      <div className='section7'>
        <div className='header'>We'd Love to See You There!</div>
        <div className='text'>If you can't come</div>
        <img className='icArrow' src={icArrow} alt='' />
        <img className='icQRcode' src={imgQRcode} alt='' />
        <img
          className='icScrollToBottom'
          src={icScrollToBottom}
          alt=''
          onClick={scrollToTop}
        />
      </div>
      {/* end section 7 */}
    </div>
  );
}

export default App;
