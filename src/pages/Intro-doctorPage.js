import React from 'react';
import homeBackground from '../assets/images/background1.jpg'; // 이미지 import
import doctor1 from '../assets/images/doctor1.png';
import doctor2 from '../assets/images/doctor2.png';

import '@fortawesome/fontawesome-free/css/all.min.css';

function DoctorsPage() {
    return (
        <div style={containerStyle}>
            {/* 병원소개 섹션 */}

            <div style={contentContainerStyle}>
                {/* 왼쪽 컬럼: 의료진 사진과 연혁 */}
                <div style={leftColumnStyle}>
                    <h6 style={introStyle}>
                        차오르다 의료진은 진심어린 소통과 바른진단으로
                        <br />
                        세심하고 꼼꼼한 시술을 제공합니다.
                    </h6>
                    <div style={doctorContainerStyle}>
                        {/* 의료진 1 */}
                        <div style={doctorStyle}>
                            <a href="#" className="btn-open1" style={doctorImageContainer}>
                                <img src={doctor1} alt="의료진 1" style={doctorImageStyle} />
                            </a>
                        </div>
                        {/* 의료진 2 */}
                        <div style={doctorStyle}>
                            <a href="#" className="btn-open2" style={doctorImageContainer}>
                                <img src={doctor2} alt="의료진 2" style={doctorImageStyle} />
                            </a>
                        </div>
                        {/* 의료진 3 */}
                        <div style={doctorStyle}>
                            <a href="#" className="btn-open3" style={doctorImageContainer}>
                                <img src={doctor2} alt="의료진 3" style={doctorImageStyle} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 오른쪽 컬럼: 병원 연락처 및 예약 서비스 */}
                <div style={rightColumnStyle}>
                    <h3 style={textStyle}>차오르다</h3>
                    <h2 style={textStyle}>의료진 소개</h2>

                    <h4>
                        <i className="fas fa-phone-alt" style={iconStyle}></i>031.522.4789
                    </h4>
                    <h4 onClick={() => window.open('카카오 채팅 링크', '_blank')} style={linkStyle}>
                        <i className="fab fa-kakao" style={iconStyle}></i>카카오 채팅 상담
                    </h4>
                    <h4 onClick={() => window.open('네이버 예약 링크', '_blank')} style={linkStyle}>
                        <i className="fab fa-line" style={iconStyle}></i>네이버 예약
                    </h4>
                </div>
            </div>
        </div>
    );
}

// CSS 스타일
const containerStyle = {
    width: '100%',
    padding: '50px 20px',
    marginTop: '40px',
};

const contentContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
};

const textStyle = {
    color: '#393939',
    margin: 0,
};

const introStyle = {
    marginTop: '70px',
    fontSize: '15px',
    color: '#595959',
};

const leftColumnStyle = {
    width: '70%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#fbfaf49e',
    fontFamily: 'Pretendard',
};

const rightColumnStyle = {
    width: '30%',
    marginTop: '50px',
};

const doctorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
};

const doctorStyle = {
    position: 'relative',
    width: '100%',
    // height: '300px', // 각 의료진 이미지 크기
};

const doctorImageContainer = {
    width: '100%',
    // height: '100%',
    cursor: 'pointer',
};

const doctorImageStyle = {
    width: '100%',
    // height: '100%',
    objectFit: 'contain', // 이미지가 잘리지 않고 영역에 맞게 조정
    borderRadius: '10px',
};

const doctorInfoStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'JejuMyeongjo, serif',
};

const linkStyle = {
    color: '#393939',
    textDecoration: 'none',
};

const linkHoverStyle = {
    textDecoration: 'underline',
};

const iconStyle = {
    marginRight: '10px',
    color: '#0073e6',
};

const bottomLineStyle = {
    borderTop: '2px solid #ccc',
    marginTop: '30px',
};

export default DoctorsPage;
