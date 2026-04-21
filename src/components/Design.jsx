import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { photoshopData } from "../data/photoshopData";
import { X } from "lucide-react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/App.scss';


export default function Design() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="photoshop">
        <h2>포토샵 디자인</h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1, // 📱 모바일
            },
            768: {
              slidesPerView: 2, // 태블릿
            },
            1024: {
              slidesPerView: 4, // PC
            },
          }}
        >
          {photoshopData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="card"
                onClick={() => setSelectedItem(item)}>
                <div className="imgBox">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
              <div className="textBox">
                <h3>{item.title}</h3>
                <p className="desc">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedItem && (
          <div
            className="modal"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="close-btn"
                onClick={() => setSelectedItem(null)}
              >
                <X />
              </div>

              <img src={selectedItem.img} alt={selectedItem.title} />
            </div>
          </div>
        )}
      </div>
      <div className='figma'>
        <h2>피그마 디자인</h2>
        - 1차 팀플, 배구, 노닐다서울
      </div>
    </>

  );
}
