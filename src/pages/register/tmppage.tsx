import { useRef, useState } from 'react';
import Modal from '../../components/main/Modal';

export default function tmpPage() {
    const [modal, setModal] = useState(false)

    //////////////////////////////////////////////////////
    //외부에서 modal로 함수와 안내문구를 넘길 수 있는지 확인
    //이 형식에 맞게 Modal 컴포넌트로 넘겨주면 됩니다
    const clickOK = () => {
        //console.log("전단지 페이지로 이동") //제대로 작동하는지 확인하고 싶으면 주석을 풀어서 확인해주세요
        //이 내부에 언니 setEntity랑 push를 넣어서 사용하면 될 것 같아요
        modalClose();
    }
    const clickCancel = () => {
        modalClose();
    }
    const alertText = "개체정보를 제대로 입력했는지 확인해주세요"
    ///////////////////////////////////////////////////////

    const modalClose = () => {
        //console.log("모달창 상태 변경"); //제대로 작동하는지 확인하고 싶으면 주석을 풀어서 확인해주세요
        setModal((modalOpen) => !modalOpen);
    };
    const modalRef = useRef<HTMLDivElement>(null)
    const modalOutSideClick = (e:any) => {
        if(modalRef.current === e.target) {
            setModal((current) => !current)
        }
    }

    return (


        <div>
            <button onClick={modalClose}>모달테스트</button>
            {
                modal &&
                <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick}
                    clickOK={clickOK} clickCancel={clickCancel} alertText={alertText}
                />
            }
        </div>
    )
}