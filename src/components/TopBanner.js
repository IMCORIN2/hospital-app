import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopBanner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/event'); // 이벤트 페이지로 이동
    };

    return (
        <div style={bannerStyle}>
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
    backgroundColor: 'rgb(13, 55, 32)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    fontSize: '1rem',
    fontWeight: 'bold',
    zIndex: 1100, // 네비게이션보다 위에 있도록 설정
};

const textStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    fontSize: '13px',
};

const buttonStyle = {
    marginLeft: '15px',
    padding: '5px 10px',
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
};

export default TopBanner;
