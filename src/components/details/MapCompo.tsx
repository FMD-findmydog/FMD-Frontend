import { useEffect } from "react";

declare global {
    interface Window{
        kakao: any;
    }
}

export default function MapCompo(map_points:any){
    // const map_points = [
    //     [37.50564286638934, 126.95768433460648],
    //     [37.50299379923183, 126.95737482086565],
    //     [37.50511661849652, 126.9539100082382 ]
    // ]

    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`
        document.head.appendChild(kakaoMapScript)

        
        var positions: { title: string; latlng: number; }[] = []
        var linePath: any[] = []

        const onLoadKakaoAPI = () => {
          window.kakao.maps.load(() => {
            var container = document.getElementById('map')
            var options = {
              center: new window.kakao.maps.LatLng(map_points.map_points[0][0], map_points.map_points[0][1]),
              level: 3,
            }
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

            var map = new window.kakao.maps.Map(container, options);

            for(let i=0; i<map_points.map_points.length; i++){
                positions.push({
                    title: i==0?'실종장소':`${i}번째 실종 신고`,
                    latlng: new window.kakao.maps.LatLng(map_points.map_points[i][0], map_points.map_points[i][1])
                })
                linePath.push(new window.kakao.maps.LatLng(map_points.map_points[i][0], map_points.map_points[i][1]))
            }
            for (var i=0; i<positions.length; i++){
                var imageSize = new window.kakao.maps.Size(24, 35); 
                var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 

                var marker = new window.kakao.maps.Marker({
                    map: map,
                    position: positions[i].latlng,
                    title: positions[i].title,
                })
                marker.setMap(map);
            }
            var polyline = new window.kakao.maps.Polyline({
                path: linePath, // 선을 구성하는 좌표배열 입니다
                strokeWeight: 5, // 선의 두께 입니다
                strokeColor: '#FFAE00', // 선의 색깔입니다
                strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid' // 선의 스타일입니다
            });
            polyline.setMap(map);
          })
        }

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
      }, [map_points])


    return(
        <div id="map" style={{width: '500px', height: '500px'}}>

        </div>
    )
}