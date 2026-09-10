import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { figmaData } from '../data/figmaData'
import { X } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/App.scss';

export default function Figma() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalType, setModalType] = useState(null);
    return (
        <div className="figma">
            <h2>피그마 디자인</h2>
            {figmaData.map((item) => (
                <div key={item.id} className="figma-card">
                    <h3>{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                    <div className="links">
                        <button onClick={() => {
                            setSelectedItem(item);
                            setModalType('style');
                        }}>
                            Style
                        </button>
                        {item.id !== 1 && (
                            <>
                                <button onClick={() => {
                                    setSelectedItem(item);
                                    setModalType('design');
                                }}>
                                    화면설계
                                </button>

                                <button onClick={() => {
                                    setSelectedItem(item);
                                    setModalType('components');
                                }}>
                                    Component
                                </button>
                            </>
                        )}
                    </div>


                    <div className="figma-screen-wrapper">
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            className="figma-swiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1440: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {item.img.map((src, i) => (
                                <SwiperSlide key={i}>
                                    <div className="figma-screen">
                                        <img src={src} alt={`${item.title}-${i}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            ))}
            {selectedItem && modalType && (
                <div className="modal" onClick={() => {
                    setSelectedItem(null);
                    setModalType(null);
                }}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="close-btn" onClick={() => {
                            setSelectedItem(null);
                            setModalType(null);
                        }}>
                            <X />
                        </div>

                        <img src={selectedItem.modal?.[modalType]} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}
