import style1 from '../assets/images/figma/figma1_1.png'
import style2 from '../assets/images/figma/figma2_1.PNG'
import style3 from '../assets/images/figma/figma3_1.PNG'
import design2 from '../assets/images/figma/figma2_9.png'
import design3 from '../assets/images/figma/figma3_6.png'
import component2 from '../assets/images/figma/figma2_10.png'
import component3 from '../assets/images/figma/figma3_7.png'
import figma1_2 from '../assets/images/figma/figma1_2.png';
import figma1_3 from '../assets/images/figma/figma1_3.png';
import figma2_2 from '../assets/images/figma/figma2_2.png';
import figma2_3 from '../assets/images/figma/figma2_3.png';
import figma2_4 from '../assets/images/figma/figma2_4.png';
import figma2_5 from '../assets/images/figma/figma2_5.png';
import figma2_6 from '../assets/images/figma/figma2_6.png';
import figma2_7 from '../assets/images/figma/figma2_7.png';
import figma2_8 from '../assets/images/figma/figma2_8.png';
import figma3_2 from '../assets/images/figma/figma3_2.png';
import figma3_3 from '../assets/images/figma/figma3_3.png';
import figma3_4 from '../assets/images/figma/figma3_4.png';
import figma3_5 from '../assets/images/figma/figma3_5.png';



export const figmaData = [
    {
        id: 1,
        title: '노닐다 서울',
        modal: {
            design: 'https://www.figma.com/file/xxxxx/design',
            components: 'https://www.figma.com/file/xxxxx/components',
            style: style1,

        },
        prototype: 'https://www.figma.com/proto/lTKNqthh2KtvbDyYqnbskj/App?node-id=2-195&t=uBYIY8paEhbXuaxe-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A194&starting-point-node-id=2%3A195',
        img: [
            figma1_2, figma1_3
        ],
        desc: '서울에서 꼭 가봐야 할 스폿, 장소 추천 등 다양한 테마를 기반으로 사용자가 쉽게 서울을 탐험할 수 있도록 구성한 어플리케이션'
    },
    {
        id: 2,
        title: 'Volleyballist',
        modal: {
            design: design3,
            components: component3,
            style: style3,
        },
        prototype: 'https://www.figma.com/proto/NDuay4sYFvbLpl7Cp2PwcI/%EC%86%8C%EC%85%9C%EC%BB%A4%EB%A8%B8%EC%8A%A4?node-id=74-7484&t=XlyCJ3Hrr7lRPpST-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=57%3A129',
        img: [
            figma3_2, figma3_3, figma3_4, figma3_5
        ],
        desc: 'V리그 경기를 실시간으로 확인하고, 티켓 예매·경기 일정 등 정보를 제공하는 스포츠 어플리케이션'
    },
    {
        id: 3,
        title: 'Joie',
        modal: {
            design: design2,
            components: component2,
            style: style2,
        },
        prototype: 'https://www.figma.com/proto/3Mkv5tvaiAPtc5e465UNMq/App_Joie?node-id=374-665&t=JrnH3H6OGrcJzwb2-1&scaling=scale-down&content-scaling=fixed&page-id=18%3A3',
        img: [
            figma2_2, figma2_3, figma2_4, figma2_5, figma2_6, figma2_7, figma2_8
        ],
        desc: '바쁜 일상 속 데이트 코스를 고민할 시간·여유가 부족한 현대인을 위한 올인원 데이트 플래닝 어플리케이션'
    },
];