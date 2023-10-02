import { useState } from "react";
import tw, { css, styled } from "twin.macro";

export default function ImageCard({ImageArr}:props){
    const [clicked, setClicked] = useState(0);
    const [curImage, setCurImage] = useState(ImageArr[0]);

    const onClick = (index:number, item:string) => {
        setClicked(index);
        setCurImage(item);
    }
    return (
        <div className="flex flex-col items-center">
            <ImageBox src={curImage}/>
            <div className="flex justify-center">
            {
                ImageArr.map((item, index) => (
                    <SelectBtn key={index} id={index.toString()} value={item} onClick={()=>onClick(index, item)} currentClicked={clicked} myId={index}/>
                ))
            }
            </div>
        </div>
    );
}

interface props {
    ImageArr : string[]
}

interface BtnProps {
    currentClicked: number;
    myId: number;
}

const SelectBtn = styled.button<BtnProps>(({currentClicked, myId}) => [
    tw`rounded-full w-3 h-3 mt-2 mx-1`,
    css`
        background-color: ${currentClicked===myId? "#4b5563" : "#d1d5db"}; 
    `
])

const ImageBox = styled.img([
    css`
        width: 40vw;
        height: 30vh;
        object-fit: contain;
        // background-color: black;
    `
])