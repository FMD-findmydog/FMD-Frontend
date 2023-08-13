import { UserScrap, UserScrapProps } from "@/store/atoms";
import React, { MouseEventHandler } from "react";
import { useRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

type Props = {
    modalRef: React.ForwardedRef<HTMLDivElement>;
    modalOutSideClick: (e:any) => void;
    clickOK: MouseEventHandler<HTMLButtonElement>;
    clickCancel: MouseEventHandler<HTMLButtonElement>;
    alertText: String | null;
}
function Modal({modalRef, modalOutSideClick, clickOK, clickCancel, alertText}:Props){
    return (
        <OuterLayer ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
            <ModalLayer>
                <button className="absolute top-2 right-5" onClick={clickCancel}>x</button>
                <Description>
                {
                    alertText!=null ?
                    alertText
                    :
                    "안내문구 출력"
                }
                </Description>
                <BtnGroup>
                    <Button color={"#2563eb"} onClick={clickOK}>OK</Button>
                    <Button color={"#808080"} onClick={clickCancel}>Cancel</Button>
                </BtnGroup>
            </ModalLayer>
        </OuterLayer>
    );
}

const OuterLayer = styled.div([ //뒷 배경 색 흐리게
    css`
        z-index: 1500;
        display: block;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `
])

const ModalLayer = styled.div([
    css`
        z-index: 2000;
        width: 300px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2px 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
])
const BtnGroup = styled.div([
    tw`w-full flex justify-around mt-8`
])

interface btnProps {
    color:string;
}
const Button = styled.button<btnProps>(({color}) => [
    tw`w-24 py-2 text-white rounded-md`,
    css`background-color:${color};` 
    //이게 왜 tailwind는 안되고 css는 되는건지 모르겠다..
])

const Description = styled.div([
    tw`w-4/5`
])

export default Modal;