import { useEffect, useState } from "react"
import KakaoMap from "./KakaoMap";
import MapInfo from "./MapInfo";
import axios from "axios";
import { IAnimal, MapDummy } from "./MapDummy";
export default function MapContent(){
  const [localname, setLocalname] = useState('');
  const [localAnimals, setLocalAnimals] = useState<IAnimal[]>([]);
  /*내 위치 주변 실종동물데이터 받아오기
  axios.get("url",{
    headers : {"x-access-token" : "토큰"},
    params : {"location" : localname},
  })
  .then((res) => {
    console.log(res);
    setLocalAnimals(...res.result);
  })
  */
  useEffect(()=>{
    setLocalAnimals((state)=>{
      return MapDummy; //api 연결이후 삭제
  })},[]);
  
  return (
    <div className ="flex justify-center items-center mr-auto">
      <div className="flex felx-row"> 
        <KakaoMap setLocalname={setLocalname} localAnimals={localAnimals}/>
        <MapInfo localname={localname} localAnimals={localAnimals} />
      </div>
    </div>
  )
}
