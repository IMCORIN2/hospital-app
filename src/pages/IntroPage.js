import React from 'react';

function IntroPage() {
    return (
        <div style={pageStyle}>
            <h1>병원소개 페이지</h1>
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
