import { useRef } from 'react';
import ReactDOM from 'react-dom';
import tw, { css, styled } from 'twin.macro';
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import { useRecoilValue } from 'recoil';
import { EntityState } from '@/store/atoms';

export default function Flyers(){
    const entity = useRecoilValue(EntityState);
    console.log("확인용");
    console.log("name:", entity.name, " gender:", entity.gender, " 중성화:", entity.neuterSurge, " 인식칩:", entity.veriChip);
    console.log("age:", entity.age, " weight:", entity.weight, " color:", entity.color, " date:", entity.date);
    console.log("significant:", entity.significant, " imgURL:", entity.imgURL, " location:", entity.location, " phone:", entity.phone)
    const dummy : dummyInfo = {
        date: '2023-07-24', //entity.date
        img: "/assets/images/dog.png", //entity.imgURL
        name: "인절미", //entity.name
        gender: 1, //1:남 0:여 //entity.gender
        neuterSurge: true, //0:중성화 안함 1:함 //entity.neuterSurge
        veriChip: true, //1:인식칩 없음 0:있음 //entity.veriChip
        age: 5, //entity.age
        weight: 3.5, //entity.weight
        color: "베이지", //모색 //entity.color
        significant: "포메라니안, 마지막 산책 당시 벌 모양 옷을 입었고 하네스를 하고 있었어요.", //entity.significant
        location: "서울특별시 동작구 흑석동 중앙대학교 근처", //entity.location
        tel:"010-1234-5678", //entity.phone
    };
    const printRef = useRef<HTMLDivElement>(null);

    const clickPrint = () => {
        const print = printRef.current;
        if(print!=null){
            domtoimage.toBlob(print).then(blob => {
                saveAs(blob, 'flyer.jpg');
            })
        }
    }


    return(
        <div>
            <div className="menuBar h-[10%] bg-red-400">메뉴바 component</div>
            <div className="flex justify-center h-[90%]">
                <div className="w-full flex flex-col items-center">
                    <div className="w-2/3 flex justify-between p-3 m-3">
                        <button><img className='w-7' src='/assets/images/edit.png' alt='편집'/></button>
                        <Notification>전단지 출력은 PC 환경을 추천합니다.</Notification>
                        <button onClick={clickPrint}><img className='w-7' src='/assets/images/save.png' alt='저장'/></button>
                    </div>
                    <Print className="print flex flex-col justify-between" ref={printRef}>
                        <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Title>강아지를 찾습니다</Title>
                            <Img><img src={dummy.img}/></Img>
                            <SigniDiv>{dummy.significant}</SigniDiv>
                            <InfoDiv>
                                <table>
                                    <tr>
                                        <td className='head'>날짜</td><td className='text-blue-500 font-bold'>{dummy.date}</td>
                                    </tr>
                                    <tr>
                                        <td className='head'>장소</td><td className='text-red-500 font-bold'>{dummy.location}</td>
                                    </tr>
                                    <tr>
                                        <td className='head'>성별</td><td>{dummy.gender==1?"남아":"여아"}, {dummy.neuterSurge?"중성화 함":"중성화 안함"}</td>
                                    </tr>
                                    <tr>
                                        <td className='head'>모색</td><td>{dummy.color}</td>
                                    </tr>
                                    <tr>
                                        <td className='head'>인식칩</td><td>{dummy.veriChip?"인식칩 없음":"인식칩 있음"}</td>
                                    </tr>
                                    <tr>
                                        <td className='head'>나이</td><td>{dummy.age}살</td>
                                    </tr>
                                    <tr>
                                        <td className='head'>몸무게</td><td>{dummy.weight}KG</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className='py-3'>
                                            <p className='text-center font-bold w-full'>:: 동물을 찾으면 직접 전단지를 수거하겠습니다. ::</p> 
                                            <p className='text-center font-bold'>:: 떼지 말아주세요! ::</p>
                                        </td>
                                    </tr>
                                </table>
                            </InfoDiv>
                            <TelDiv>
                                <img src='/assets/images/logo.png'/>
                                <div>
                                    <p className='tel'>TEL){dummy.tel}</p>
                                    <p>반려동물 실종동물 찾기는 'FMD'를 검색하세요!</p>
                                </div>
                            </TelDiv>
                        </div>
                    </Print>
                </div>

            </div>
        </div>
    )
}

interface dummyInfo {
    date: string;
    img: string;
    name: string;
    gender: number;
    neuterSurge: boolean, //중성화 O : 1, 중성화 X : 0
    veriChip: boolean, //인식칩 O : 0, 인식칩 X : 1
    color: string;
    age: number;
    weight: number;
    significant: string;
    location: string;
    tel: string;
}

const Notification = styled.p([
    css`
        display: none;
        @media screen and (max-width: 867px){
            display: block;
            font-size: 0.5rem;
        }
    `
]);

const Print = styled.div([
    css`
        background:white;
        position:relative;
        width: 70.7070%;
        height: 0;
        padding-top: 100%;
    `
]);

const Title = styled.div([
    tw`text-center font-extrabold border-8 border-red-500`,
    css`
    box-sizing: border-box;
    height: 10%;
    font-size: 5vmax;
    color: red;
    text-shadow: 1px 1px 1px gray;
    @media screen and (max-width: 867px){
        font-size: 1rem;
    }
    `
]);

const Img = styled.div([
    tw`m-3`,
    css`
    box-sizing: border-box;
    height: 30%;
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    `
]);

const SigniDiv = styled.div([
    tw`bg-red-600 text-white p-2`,
    css`
    box-sizing: border-box;
    font-size: 2.5vmax;
    height: 10%;
    text-shadow: 2px 2px 2px gray;
    @media screen and (max-width: 867px){
        padding: 2px;
        font-size: 0.5rem;
      }
    `
]);

const InfoDiv = styled.div([
    tw`px-3`,
    css`
    font-size: 2vmax;
    height: 40%;
    box-sizing: content-box;
    table{
        width: 100%;
    }
    .head{
        font-weight: 600;
    }

    @media screen and (max-width: 867px){
        font-size: 0.5rem;

        .head{
            width:50px;
        }
    }
    `
]);

const TelDiv = styled.div([
    tw`flex border-y-4 border-black`,
    css`
        // position: absolute;
        // bottom: 0;
        box-sizing: content-box;
        // height: 10%;
        background-color: white;
        img{
            width: 10%;
            margin: 3px;
        }
        .tel{
            color: rgb(239 68 68);
            font-size: 2.5vmax;
            text-shadow: 2px 2px 2px gray;
            font-weight: 800;

            @media screen and (max-width: 867px){
                font-size: 0.5rem;
            }
        }
        @media screen and (max-width: 867px){
            font-size: 0.5rem;
        }
        
    `
]);