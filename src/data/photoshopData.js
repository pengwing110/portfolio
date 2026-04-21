const textData = [
    { title: '웹 + 모바일 디자인', desc: '따뜻한 감성의 뜨개질 브랜드 웹+ 모바일 디자인'},
    { title: '웹 디자인', desc: '명화전 홍보 웹 디자인' },
    { title: 'SNS 썸네일', desc: '유튜브 썸네일' },
    { title: '상세페이지', desc: '쇼핑몰 상세 디자인' },
    { title: '웹 UI 시안', desc: '웹디자인 연습' },
    { title: '카드뉴스', desc: '인스타 카드뉴스' },
    { title: '브랜딩', desc: '로고 + 컬러' },
    { title: '앱 디자인', desc: '모바일 UI' },
    { title: '랜딩페이지', desc: '프로모션 페이지' },
    { title: '광고 이미지', desc: '마케팅용' },
    { title: 'SNS 포토 리뷰 이벤트', desc: '여행의 순간을 남기는 포토 리뷰 이벤트' },
];

const images = import.meta.glob('../assets/images/photoshop*.png', {
    eager: true,
});

const sortedImages = Object.entries(images)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, module]) => module);

export const photoshopData = sortedImages.map((module, index) => ({
    id: index + 1,
    img: module.default,
    title: textData[index]?.title || `포토샵 ${index + 1}`,
    desc: textData[index]?.desc || '',
}));