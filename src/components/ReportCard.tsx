import { css, styled } from "twin.macro"
import Image from "next/image";
import { useRouter } from "next/router";
export default function MapReportCard( entity : any){
  const animal = entity.entity;
  const router = useRouter();
  const handleCardClick=(e:any)=>{
    router.push(`/details/${animal.postIdx}}`);
  }
  return (
    <Card onClick={handleCardClick}>
      <Image src={`${animal.imgURL}`} alt={"동물등록사진"} width={80} height={80} className="animal-img"/>
      <CardInfo>
        <h2>{animal.name}</h2>
        <span>{animal.location}</span>
        <span>{animal.date} </span>
      </CardInfo>
    </Card>
  )
}
const Card = styled.div([
  css`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 100px;
    background-color: #f6f3f3;
    border-left: 5px solid #82a2d2;
    margin-bottom: 15px;
    padding: 10px 20px;
    border-radius: 0px 5px 5px 0px;
    .animal-img {
      margin-right : 20px;
      width: 80px;
      height: 80px;
      object-fit : cover;
      border-radius: 4px;
    }
    &:hover {
      cursor : pointer;
    }
  `
])
const CardInfo = styled.div([
  css`
    display: flex;
    flex-direction: column;
    h2 {
      font-size: large;
      font-weight: 600;
    }
  `
])