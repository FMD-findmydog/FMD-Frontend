import axios from "axios";
import { useEffect, useState } from "react"
import { styled } from "twin.macro";
import dotenv from "dotenv";
dotenv.config();
declare global {
  interface Window {
    kakao : any;
  }
}
const JS_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_JS_KEY;
console.log(JS_KEY);
interface Props{
  setLocalname: React.Dispatch<React.SetStateAction<string>>;
}
export default function KakaoMap({setLocalname} : Props){
  useEffect(()=>{
    const kakaoMapScript = document.createElement('script');
    
    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${JS_KEY}&autoload=false&libraries=services`;
    //git hub에 올리기 전에 encrypt하기

    document.head.appendChild(kakaoMapScript);
    
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level:1, //확대레벨
        };
        const map = new window.kakao.maps!.Map(container, options);

        //현위치 표시
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            const localPosition = new window.kakao.maps.LatLng(lat, lon);
            const message = '<div>현재위치</div>';
            displayMarker(localPosition, message);
            getAddr(lat,lon);
          })
        }
        function displayMarker(localPosition: any, message:string){
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: localPosition
        });
          const infoWindow = new window.kakao.maps.InfoWindow({
            content: message,
            removable: true,
          })
          infoWindow.open(map, marker);
          map.setCenter(localPosition);
        }
        async function getAddr(lat: any,lon:any){
          let geocoder = new window.kakao.maps.services.Geocoder();
          let coord = new window.kakao.maps.LatLng(lat, lon);
          let callback = function(result:any, status:any) {
              if (status === window.kakao.maps.services.Status.OK) {
                console.log(typeof(result[0].address.address_name));
                setLocalname(result[0].address.address_name);
              }
          }
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      }
      })
    }

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

  }, []);
  return (
    <KMap >
      <div id="map" className="w-full h-full" ></div>
    </KMap>
  )
}
const KMap = styled.main`
  width: 60vw;
  height: 80vh;
  margin-right : 5%;
`
