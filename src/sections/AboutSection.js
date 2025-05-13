import React from 'react';
import homeBackground from '../assets/images/background2.jpg';

function AboutSection() {
    return (
        <section id="home" style={{ ...sectionStyle, backgroundImage: `url(${homeBackground})` }}>
            <h3 style={h3Style}>자신감이 차오르다</h3>
            <h4 style={h4Style}>
                우리는 각각의 피부타입에 맞는 '최선의 방법'을 고민하고,
                <br />
                '안전하게 시술 하는 것'을 최우선으로 생각하며,
                <br />
                프리미엄 장비와 소모품 사용으로 높은 시술 퀄리티를 추구합니다.
            </h4>
        </section>
    );
}

const sectionStyle = {
    width: '100%', // 너비 100%로 설정
    height: '100vh', // 높이 100vh로 설정하여 화면 가득 차게
    display: 'flex',
    flexDirection: 'column', // 텍스트를 세로로 배치
    justifyContent: 'center', // 위 아래로 세로 정렬
    alignItems: 'center', // 텍스트가 좌우 중앙 정렬
    paddingLeft: '20px', // 왼쪽 여백
    backgroundSize: 'cover', // 배경 이미지가 섹션을 가득 채움
    backgroundPosition: 'center', // 이미지가 섹션 중앙에 위치
    backgroundRepeat: 'no-repeat', // 이미지 반복 방지
};

const h3Style = {
    fontSize: '2rem',
    margin: 0,
    marginBottom: '30px',
    paddingBottom: '10px', // h1 아래 여백 추가
    color: '#fff',
    fontFamily: 'JejuMyeongjo, serif', // JejuMyeongjo 폰트 적용
};

const h4Style = {
    fontSize: '1.2rem',
    margin: 0,
    width: '800px',
    display: 'block',
    textAlign: 'center', // 텍스트를 가로로 중앙 정렬
    lineHeight: '1.6', // 줄 간격 설정
    color: '#fff',
    fontFamily: 'JejuMyeongjo, serif', // JejuMyeongjo 폰트 적용
};

export default AboutSection;
