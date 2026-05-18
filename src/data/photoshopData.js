const textData = [
    { title: '웹 + 모바일 디자인', desc: '따뜻한 감성의 뜨개질 브랜드 웹+ 모바일 디자인'},
    { title: '웹 디자인', desc: '명화전 홍보 웹 디자인' },
    { title: '포스터', desc: '레이어 마스크와 클리핑 마스크를 활용한 타이포·이미지 결합 그래픽 작업' },
    { title: '프로모션 카드', desc: '클리핑 마스크를 활용한 프로모션 카드 제작' },
    { title: '상품 메뉴판', desc: '카드 레이아웃과 클리핑 마스크를 활용한 메뉴판 제작' },
    { title: '상품 정보 폼', desc: '생성형 AI 이미지를 활용한 가상의 도자기 브랜드 상품정보폼 제작' },
    { title: '홍보용 이벤트 배너', desc: '직접 정의한 패턴을 활용한 배너 디자인 제작' },
    { title: '캠페인 포스터', desc: '빙하가 붕괴되는 듯한 효과를 넣어 환경 경각심을 시각화한 캠페인 포스터 제작' },
    { title: '매거진 커버', desc: '노이즈 효과를 적용한 클래식 무드의 매거진 커버 제작' },
    { title: '포스터', desc: '글씨 반전 효과를 활용한 환경 보호 포스터 제작' },
    { title: '포토 리뷰 이벤트', desc: '여행 순간을 기록하는 카드 형식의 SNS 이벤트 페이지 제작' },
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