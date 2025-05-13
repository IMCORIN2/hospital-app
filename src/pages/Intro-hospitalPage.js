import React from 'react';
import homeBackground from '../assets/images/background2.jpg'; // 이미지 import

function IntroPage() {
    return (
        <div>
            {/* 섹션 1: 병원소개 */}
            <section
                style={{
                    ...sectionStyle,
                    backgroundImage: `url(https://previews.123rf.com/images/seventyfour74/seventyfour741806/seventyfour74180601299/103428452-%EA%B0%9C%EC%9D%B8%ED%81%B4%EB%A6%AC%EB%8B%89-%EC%83%81%EB%8B%B4.jpg)`,
                }}
            >
                <h3 style={textStyle.h3}>1:1 개인 맞춤형 솔루션</h3>
                <h4 style={textStyle.h4}>
                    차오르다는 의사가 직접 고객의 피부타입과 두께,
                    <br />
                    얼굴형, 고민에 따라 꼭 맞는 솔루션을 찾아내고
                    <br />
                    확실한 개선을 위해 진심을 다하는 커스텀 케어 피부과입니다.
                </h4>
            </section>

            {/* 섹션 2: 추가 섹션 */}
            <section style={sectionStyle}>
                <h4 style={textStyle.h4Left}>
                    차오르다는 획일화 된 치료를 지양합니다.
                    <br />
                    각각의 피부에는 고유의 결이 있다고 생각하기 때문입니다.
                    <br />
                    그래서 차오르다에는 고객의 숫자만큼 다양한 피부 솔루션이 있습니다.
                </h4>
            </section>

            {/* 섹션 3: 이미지 가로로 배치 */}
            <section style={sectionStyle}>
                <div style={imgContainerStyle}>
                    <img src={homeBackground} alt="이미지 1" style={imgStyle} />
                    <img src={homeBackground} alt="이미지 2" style={imgStyle} />
                </div>
            </section>

            {/* 섹션 4: 오른쪽 정렬 */}
            <section style={sectionStyle}>
                <h4 style={textStyle.h4Right}>
                    차오르다에게 당신의 일상은 소중합니다.
                    <br />
                    그래서 우리는 당신의 시간을 생각하고
                    <br />
                    우리가 마주할 공간을 고민합니다.
                </h4>
            </section>

            {/* 섹션 5: 이미지 가로로 배치 */}
            <section style={sectionStyle}>
                <div style={imgContainerStyle}>
                    <img src={homeBackground} alt="이미지 3" style={imgStyle} />
                    <img src={homeBackground} alt="이미지 4" style={imgStyle} />
                </div>
            </section>
        </div>
    );
}

const sectionStyle = {
    width: '100%',
    height: '45vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop: 0,
    marginBottom: 0,
};

const imgContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
};

const imgStyle = {
    width: '48%',
    height: '35vh',
    objectFit: 'cover',
};

const textStyle = {
    h3: {
        fontSize: '2rem',
        margin: 0,
        marginBottom: '30px',
        paddingBottom: '10px',
        color: '#fff',
        fontFamily: 'JejuMyeongjo, serif',
    },
    h4: {
        fontSize: '1.2rem',
        margin: 0,
        width: '800px',
        display: 'block',
        textAlign: 'center',
        lineHeight: '1.6',
        color: '#fff',
        fontFamily: 'JejuMyeongjo, serif',
    },
    h4Left: {
        fontSize: '1.3rem',
        margin: 0,
        width: '800px',
        display: 'block',
        textAlign: 'left',
        lineHeight: '1.6',
        color: '#000',
        fontFamily: 'JejuMyeongjo, serif',
    },
    h4Right: {
        fontSize: '1.3rem',
        margin: 0,
        width: '800px',
        display: 'block',
        textAlign: 'right',
        lineHeight: '1.6',
        color: '#000',
        fontFamily: 'JejuMyeongjo, serif',
    },
};

export default IntroPage;
