import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopBanner() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); // 마우스 오버 상태 추적

    const handleClick = () => {
        navigate('/event'); // 이벤트 페이지로 이동
    };

    return (
        <div
            style={{
                ...bannerStyle,
                backgroundColor: isHovered ? 'rgba(13, 55, 32, 0.8)' : 'rgba(13, 55, 32, 0.6)', // 마우스 오버 시 배경 강조
            }}
            onMouseEnter={() => setIsHovered(true)} // 마우스가 올라갔을 때
            onMouseLeave={() => setIsHovered(false)} // 마우스가 내려갔을 때
        >
            <span onClick={handleClick} style={textStyle}>
                5월 이벤트 보러가기!
            </span>
        </div>
    );
}

const bannerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    zIndex: 1100, // 네비게이션보다 위에 있도록 설정
    transition: 'background-color 0.3s', // 배경 색상 변화 부드럽게
};

const textStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    fontSize: '13px',
    padding: '0 10px', // 텍스트에 좌우 여백 추가
    transition: 'color 0.3s', // 글자 색상 변화 부드럽게
};

export default TopBanner;
