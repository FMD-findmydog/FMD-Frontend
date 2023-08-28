import { styled } from "twin.macro"
import {IAnimal} from "../components/MapDummy";
import MapReportCard from "./ReportCard";
interface IInfoProps {
  localname: any,
  localAnimals : IAnimal[]
}
export default function MapInfo({localname, localAnimals}: IInfoProps){
  console.log('local name',localname);
  console.log('localAnimals',localAnimals);
  
  return (
    <InfoBox>
      <h1 className="text-3xl font-semibold">내 위치 주변 실종신고</h1>
      <p className="text-xl my-4">{localname}</p>
      {
        localAnimals.map((v,_) => 
          <MapReportCard entity={v} key={v.postIdx}/>
        )
      } 
    </InfoBox>
  )
}
const InfoBox = styled.div`
  width: 30vw;
`