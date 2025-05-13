import React, { useEffect } from 'react';

// 스크립트로 kakao maps api를 심어서 가져오면 window 전역 객체에 들어가서 함수형 컴포넌트는 인식을 못함
const { kakao } = window;
function KakaoMap() {
    useEffect(() => {
        // 카카오맵 API 스크립트 동적 추가
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&libraries=services,clusterer`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // 카카오맵 로드 후 실행되는 코드
            if (window.kakao && window.kakao.maps) {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };

                const map = new window.kakao.maps.Map(container, options); // 지도 생성

                // 마커 추가
                const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });

                marker.setMap(map); // 마커 지도에 추가
            }
        };

        // Cleanup: 컴포넌트가 unmount 될 때 스크립트 제거
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
}

export default KakaoMap;
