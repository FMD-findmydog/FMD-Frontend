export const MapDummy: IAnimal[] = [
  {
      "postIdx" : 6,
      "name" : "재롱",
      "location" : "경상북도 구미시 선기로2길 6",
      "date" : "2022-05-03",
      "imgURL" : "/jerong.jpeg",
      "lat" : 36.130861,
      "lon" : 128.318132,
  },
  {
      "postIdx" : 7,
      "name" : "아코",
      "location" : "경상북도 구미시 남통동 23-42",
      "date" : "2022-05-03",
      "imgURL" : "/corgi.jpeg",
      "lat": 36.129788,
      "lon": 128.319970,
  },
  {
      "postIdx" : 8,
      "name" : "사랑",
      "location" : "경상북도 구미시 남통동 26-1",
      "date" : "2022-05-03",
      "imgURL" : "/puddle.jpeg",
      "lat": 36.129192,
      "lon": 128.319332,
  },
];

export type IAnimal ={
  postIdx : number,
  name : string,
  location : string,
  date : string,
  imgURL : string,
  lat: number,
  lon : number,
}