import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopNav() {
    const navigate = useNavigate();
    const sections = ['home', 'about', 'services', 'contact'];
    const [textColor, setTextColor] = useState('#fff'); // 기본 검정색

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            for (let section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const offsetTop = el.offsetTop;
                    const offsetBottom = offsetTop + el.offsetHeight;
                    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                        // 나중에 필요 시 섹션별로 조건 추가
                        if (section === 'someFutureBrightBackgroundSection') {
                            setTextColor('#000'); // 흰색 글자 (향후 필요 시 사용)
                        } else {
                            setTextColor('#fff'); // 검은색 글자 (현재 기본값)
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={navStyle}>
            {['/', '/intro', '/solution', '/before-after', '/event'].map((path, index) => (
                <span key={path} onClick={() => navigate(path)} style={{ ...linkStyle, color: textColor }}>
                    {['홈', '병원소개', '피부교정 솔루션', '시술 전후', '이벤트'][index]}
                </span>
            ))}
        </nav>
    );
}

const navStyle = {
    position: 'fixed',
    top: '40px', // TopBanner 높이만큼 떨어지게 설정
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    zIndex: 1200, // TopBanner보다 높은 z-index 값
    cursor: 'pointer',
    flexWrap: 'wrap',
};

const linkStyle = {
    textDecoration: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
};

export default TopNav;
