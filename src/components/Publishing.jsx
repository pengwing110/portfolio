import React from 'react'
import { publishData } from '../data/publishingData'

export default function Publishing() {
    return (
        <div className="publishingGrid">
            {publishData.map((item) => (
                <div className="publishingCard" key={item.id}>
                    <div className="imgBox">
                        <img src={item.img} alt={item.title} />

                        <div className="overlay">
                            <div className="info">
                                {/* <div className="part">
                                    {item.id !== 1 && (
                                        <p>디자인 {item.info.contribution.design}%  |</p>
                                    )}
                                    <p>퍼블리싱 {item.info.contribution.publish}%</p>
                                </div> */}

                                <div className="tech">
                                    {item.tech.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>

                                <div className="links">
                                    <a href={item.links.notion} target="_blank">작업 일지</a>
                                    <a href={item.links.site} target="_blank">사이트 바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="projectTitle">{item.title}</h3>
                    <p className="desc">{item.info.desc}</p>
                </div>
            ))}
        </div>
    )
}
