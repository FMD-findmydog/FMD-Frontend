import { Fragment, useEffect, useState } from "react"
import { styled } from "twin.macro"
import KakaoMap from "./KakaoMap";
import MapInfo from "./MapInfo";
export default function MapContent(){
  const [localname, setLocalname] = useState('');
  return (
    <div className ="flex justify-center items-center mr-auto">
      <div className="flex felx-row"> 
        <KakaoMap setLocalname={setLocalname}/>
        <MapInfo localname={localname} />
      </div>
    </div>
  )
}
//Map info 에 들어가야 할 부분
//1. 내위치 v
//2. 내위치 주변 등록된 신고들 -> card 컴포넌트로 작성
