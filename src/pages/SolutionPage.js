import React from 'react';

function IntroPage() {
    return (
        <div style={pageStyle}>
            <h1>솔루션 페이지</h1>
        </div>
    );
}

const pageStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
};

export default IntroPage;
