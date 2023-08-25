import { styled } from "twin.macro"

export default function MapInfo(localname: any | null){
  console.log('local',localname.localname);

  return (
    <InfoBox>
      <h1 className="text-3xl font-semibold">내 위치 주변 실종신고</h1>
      <p className="text-xl my-4">{localname.localname}</p>
    </InfoBox>
  )
}
const InfoBox = styled.div`
  width: 30vw;
`