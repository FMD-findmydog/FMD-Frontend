import axios from "axios";
import { useEffect, useState } from "react"
import { styled } from "twin.macro";
import dotenv from "dotenv";
import { IAnimal } from "./MapDummy";
dotenv.config();
declare global {
  interface Window {
    kakao : any;
  }
}
const JS_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_JS_KEY;
//const {kakao} = window;
interface Props{
  setLocalname: React.Dispatch<React.SetStateAction<string>>;
  localAnimals : IAnimal[];
}
export default function KakaoMap({setLocalname, localAnimals} : Props){
  console.log("카카오맵에서 받은 state",localAnimals);
  useEffect(()=>{
    const kakaoMapScript = document.createElement('script');
    
    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${JS_KEY}&autoload=false&libraries=services`;

    document.head.appendChild(kakaoMapScript);
    
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level:3, //확대레벨
        };
        const map = new window.kakao.maps!.Map(container, options);

        //다중마커표시
        const positions = localAnimals.map((v,_)=>{
          return {
            title: v.name,
            latlng : new window.kakao.maps.LatLng(v.lat, v.lon)
          }
        } )
        let imageSrc ="/spot.png";
        for (var i = 0; i < positions.length; i ++) {
    
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(35, 35); 
          // 마커 이미지를 생성합니다    
          var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
          let content = 
            `<div className="customoverlay">
              <a href="https://map.kakao.com/link/map/11394059"> 
              <span class="title">${localAnimals[i].name}</span> 
              </a>
            </div>`;
          let contentPosition = new window.kakao.maps.LatLng(localAnimals[i].lat, localAnimals[i].lon);
          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image : markerImage // 마커 이미지 
          });
          var customOverlay = new window.kakao.maps.CustomOverlay({
            map: map,
            position: contentPosition,
            content: content,
            yAnchor: 1 
        });
          
      }



        //현위치 표시
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            const localPosition = new window.kakao.maps.LatLng(lat, lon);
            const message = '<div style="padding: 0px 0px 0px 40px; color: red;"}>현재위치</div>';
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
        //from lat, lon to string 주소
        async function getAddr(lat: any,lon:any){
          let geocoder = new window.kakao.maps.services.Geocoder();
          let coord = new window.kakao.maps.LatLng(lat, lon);
          let callback = function(result:any, status:any) {
              if (status === window.kakao.maps.services.Status.OK) {
                setLocalname(result[0].address.address_name);
              }
          }
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      }
      })
    }
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
    //window.kakao.maps.event.addListener(marker, 'click', handleMarkerClick);
  }, [localAnimals]);

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
  .customoverlay {position:relative;bottom:85px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}
  .customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
  .customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
  .customoverlay .title {display:block;text-align:center;background:#fff;margin-right:35px;padding:10px 15px;font-size:14px;font-weight:bold;}
  .customoverlay:after {content:'';position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
`
