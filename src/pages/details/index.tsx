import ImageCard from "@/components/details/ImageCard";
import InfoCompo from "@/components/details/InfoCompo";
import MapCompo from "@/components/details/MapCompo";
import TimelineCompo from "@/components/details/TimelineCompo";
import tw, { css, styled } from "twin.macro";

export default function Details(){
    const imageArr = ['/asserts/images/image_test1.jpg', '/asserts/images/image_test2.jpg'];
    const tmpEntity = {
        name: "뽀삐",
        gender: 0, //암컷 : 0 , 수컷 1
        neuterSurge: true, //중성화 O : 1, 중성화 X : 0
        veriChip: true, //인식칩 O : 0, 인식칩 X : 1
        age: 5,
        weight: "8",
        color: "인절미",
        date: "2023-08-23",
        lon: "",
        lan: "",
        significant: "사람을 너무 좋아해요. 당시 추워서 따듯한 옷을 입혔어요. 하네스를 차고 돌아다니고 있을거에요.", //특이사항
        imgURL: "",
        address: "중앙대 근처",
        location: undefined, //전단지 작성시 only
        phone: undefined //전단지 작성시 only
    }
    //전단지 만들기 버튼 활성화를 위한 임시 변수
    let curUserIdx = 1; //현재 접속 유저의 userIdx
    let postUserIdx = 1; //게시글 작성자의 userIdx

    const points = [
        [37.50564286638934, 126.95768433460648],
        [37.50299379923183, 126.95737482086565],
        [37.50511661849652, 126.9539100082382 ]
    ]

    return (
        <Layout>
            <InnerLayout>
                <div className="w-1/2">
                    <ImageCard ImageArr={imageArr}/>
                </div>
                <div className="mx-8 w-1/2">
                    <InfoCompo EntityState={tmpEntity} isScrap={true}/>
                    <>
                        <Button>목격신고하기</Button>
                        {curUserIdx===postUserIdx && <Button>전단지만들기</Button>}
                        <button>공유</button>
                    </>
                </div>
            </InnerLayout>
            <InnerLayout>
                <div className="flex justify-center w-1/2">
                    <MapCompo map_points={points}/>
                </div>
                <div className="w-1/2 bg-blue-400">타임라인</div>
            </InnerLayout>
        </Layout>
    );
}

const Layout = styled.div([
    tw`p-12`

])

const InnerLayout = styled.div([
    tw`flex w-full my-5`,
    css`
    `
])

const Button = styled.button([
    tw`py-2 px-3 m-3 text-[#93c5fd] border-2 border-[#93c5fd] hover:border-[#3b82f6] hover:text-[#3b82f6] `,
    css``
])