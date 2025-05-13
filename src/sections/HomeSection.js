import React, { useEffect, useRef, useState } from 'react';
import homeBackground from '../assets/images/background1.jpg'; // 이미지 import

function HomeSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // IntersectionObserver를 설정하여 섹션이 보일 때마다 애니메이션을 다시 시작하게 함
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // 화면에 섹션이 보일 때 상태를 true로 설정
                } else {
                    setIsVisible(false); // 화면에서 섹션이 벗어나면 다시 false로 설정
                }
            },
            { threshold: 0.5 } // 50% 이상 보일 때 트리거
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="home" ref={sectionRef} style={{ ...sectionStyle, backgroundImage: `url(${homeBackground})` }}>
            {/* 애니메이션 정의 */}
            <style>
                {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .fadeInText {
            animation: fadeIn 2s ease-in-out forwards;
          }
          .fadeInTextDelayed {
            animation: fadeIn 3s ease-in-out forwards;
          }
        `}
            </style>

            <h3 className={isVisible ? 'fadeInText' : ''} style={h3Style}>
                진심이 차오르다
            </h3>
            <h4 className={isVisible ? 'fadeInTextDelayed' : ''} style={h4Style}>
                우리는 정직과 실력을 바탕으로 불필요한 시술은 권하지 않으며,
                <br />
                진심으로 소통하여 바르게 진료하고, 건강하게 케어합니다.
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
    overflow: 'hidden', // 섹션의 넘치는 콘텐츠를 숨김
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

export default HomeSection;
