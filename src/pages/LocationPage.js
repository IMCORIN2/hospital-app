import React from 'react';
import KakaoMap from '../components/KakaoMap'; // KakaoMap 컴포넌트 import

function LocationPage() {
    return (
        <div style={{ padding: '20px' }}>
            <h3>오시는 길</h3>
            <KakaoMap /> {/* KakaoMap 컴포넌트를 여기서 사용 */}
            <div>
                <h4>병원 주소</h4>
                <p></p>
            </div>
        </div>
    );
}

export default LocationPage;
