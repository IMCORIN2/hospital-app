import React from 'react';
import homeBackground from '../assets/images/background1.jpg'; // 이미지 import
import machine1 from '../assets/images/machine1.png';

import '@fortawesome/fontawesome-free/css/all.min.css';

function MachinesPage() {
    return (
        <div style={containerStyle}>
            {/* 병원소개 섹션 */}

            <div style={contentContainerStyle}>
                {/* 왼쪽 컬럼: 의료진 사진과 연혁 */}
                <div style={leftColumnStyle}>
                    <h6 style={introStyle}>
                        차오르다는 엄선된 프리미엄 장비들을 통해해
                        <br />
                        시술 안정성과 높은 만족감을 선사합니다.
                    </h6>
                    <div style={machineContainerStyle}>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 1" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 2" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 3" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 3" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 3" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 3" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                        <div style={machineImgStyle}>
                            <img src={machine1} alt="의료진 3" style={doctorImageStyle} />
                            <div>머신</div>
                        </div>
                    </div>
                </div>

                {/* 오른쪽 컬럼: 병원 연락처 및 예약 서비스 */}
                <div style={rightColumnStyle}>
                    <h3 style={textStyle}>차오르다</h3>
                    <h2 style={textStyle}>장비 소개</h2>

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
    fontsize: '23px',
};

const introStyle = {
    marginTop: '70px',
    fontSize: '15px',
    color: '#595959',
};

const leftColumnStyle = {
    width: '60%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#fbfaf49e',
    fontFamily: 'Pretendard',
};

const rightColumnStyle = {
    width: '35%',
    marginTop: '50px',
};

const machineContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // 이미지들을 여러 열로 배치
    justifyContent: 'space-between', // 열 사이의 간격을 자동으로 맞춤
    gap: '20px',
};

const machineImgStyle = {
    position: 'relative',
    width: '30%', // 각 이미지의 크기를 3열에 맞게 설정
    height: '170px',
    fontSize: '15px',
};

const doctorImageContainer = {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
};

const doctorImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // 이미지를 영역에 맞게 채우되 비율을 유지
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

export default MachinesPage;
