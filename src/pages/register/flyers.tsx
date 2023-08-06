import { useRef } from 'react';
import ReactDOM from 'react-dom';
import tw, { css, styled } from 'twin.macro';
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import { blob } from 'stream/consumers';


export default function Flyers(){
    const dummy : dummyInfo = {
        date: new Date('2023-7-24'),
        img: "/assets/images/dog.png",
        name: "인절미",
        gender: 1, //0:남 1:여
        neuterSurge: 1, //0:중성화 안함 1:함
        verichip: 1, //0:인식칩 없음 1:있음
        color: "베이지", //모색
        significant: "포메라니안, 마지막 산책 당시 벌 모양 옷을 입었고 하네스를 하고 있었어요.",
        location: "서울특별시 동작구 흑석동 중앙대학교 근처입니다. 진짜 어디갔는지 모르겠어요ㅜㅠㅠㅠ",
        tel:"010-1234-5678",
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
            <div className="menuBar h-32 bg-red-400">메뉴바 component</div>
            <div className="flex justify-center">
                <div className="w-full flex flex-col items-center">
                    <div className="w-2/3 flex justify-between p-3 m-3">
                        <button><img className='w-7' src='/assets/images/edit.png' alt='편집'/></button>
                        <button onClick={clickPrint}><img className='w-7' src='/assets/images/save.png' alt='저장'/></button>
                    </div>
                    <Print className="print flex flex-col justify-between" ref={printRef}>
                        <Title>강아지를 찾습니다</Title>
                        <Img><img src={dummy.img}/></Img>
                        <SigniDiv>{dummy.significant}</SigniDiv>
                        <InfoDiv>
                            <p><span className='title'>날짜</span> <span className='date'>{dummy.date.getFullYear()}년 {dummy.date.getMonth()}월 {dummy.date.getDay()}일</span></p>
                            <p><span className='title'>장소</span> <span className='location'>{dummy.location}</span></p>
                            <p><span className='title'>성별</span> {dummy.gender==0?"남아":"여아"}, {dummy.neuterSurge==0?"중성화 안함":"중성화 함"}</p>
                            <p><span className='title'>모색</span> {dummy.color}</p>
                            <p><span className='title'>인식칩</span> {dummy.verichip==0?"인식칩 없음":"인식칩 있음"}</p>
                            &nbsp;
                            <p className='text-center'>:: 동물을 찾으면 직접 전단지를 수거하겠습니다. ::</p> 
                            <p className='text-center'>:: 떼지 말아주세요! ::</p>
                        </InfoDiv>
                        <TelDiv>
                            <img src='/assets/images/logo.png'/>
                            <div>
                                <p className='tel'>TEL){dummy.tel}</p>
                                <p>반려동물 실종동물 찾기는 'FMD'를 검색하세요!</p>
                            </div>
                        </TelDiv>
                    </Print>
                </div>

            </div>
        </div>
    )
}

interface dummyInfo {
    date: Date;
    img: string;
    name: string;
    gender: number;
    neuterSurge: number;
    verichip: number;
    color: string;
    significant: string;
    location: string;
    tel: string;
}

const Print = styled.div([
    css`
    // @media print {
    //     @page { margin: 0; }
    //     body { margin: 1.6cm; }
    //   }
        // width: 21cm;
        // min-height: 29.7cm;
    //     padding: 2cm;
    //     margin: 0 auto;
        background:white;
    `
]);

const Title = styled.div([
    tw`text-center font-extrabold text-5xl border-8 border-red-500 p-3`,
    css`
    // font-size: 2vmax;
    color: red;
    text-shadow: 1px 1px 1px gray;
    @media screen and (max-width: 767px){
        font-size: 2rem;
      }
    `
]);

const Img = styled.div([
    tw`m-3`,
    css`
    img{
        width:100%;
        height:40vh;
        object-fit: cover;
    }
    `
]);

const SigniDiv = styled.div([
    tw`bg-red-600 text-white text-4xl p-2`,
    css`
    text-shadow: 2px 2px 2px gray;
    @media screen and (max-width: 767px){
        font-size: 1rem;
      }
    `
]);

const InfoDiv = styled.div([
    tw`p-3 text-2xl`,
    css`
    .date{
        color: blue;
        font-weight: 600;
    }
    .location{
        color: red;
        font-weight: 600;
    }
    .title{
        display:inline-block;
        width:80px;
        // text-align: center;
        font-weight: 600;

    }
    @media screen and (max-width: 767px){
        font-size: 1rem;
      }

    `
]);

const TelDiv = styled.div([
    tw`flex border-y-4 border-black`,
    css`
        img{
            width: 80px;
            margin: 3px;
        }
        .tel{
            color: rgb(239 68 68);
            font-size: 2.25rem; /* 36px */
            line-height: 2.5rem; /* 40px */
            text-shadow: 2px 2px 2px gray;
            font-weight: 800;
        }
        
    `
]);