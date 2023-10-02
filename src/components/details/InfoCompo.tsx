import { useState, useCallback } from "react";
import { css, styled } from "twin.macro";

export default function InfoCompo({EntityState, isScrap}:props){
    const [scrap, setScrap] = useState(isScrap);
    const onClick = useCallback(() => {
        setScrap(cur => !cur)
    }, [])

    const bookmarkAPI = useCallback(()=>{
        //scrap 정보가 변경되면 api 호출
    }, [scrap]);

    return(
        <div>
            <button onClick={onClick}>
                <img src={scrap?"/asserts/images/bookmark_checked.png":"/asserts/images/bookmark_empty.png"} className="w-12"/>
            </button>
            <Table>
                <tbody>
                <tr><td className="th">이름</td><td>{EntityState.name}</td></tr>
                <tr><td className="th">최초등록장소</td><td>{EntityState.address}</td></tr>
                <tr><td className="th">종류</td><td>{EntityState.name}</td></tr>
                <tr><td className="th">특이사항</td><td>{EntityState.significant}</td></tr>
                <tr><td className="th">날짜</td><td>{EntityState.date}</td></tr>
                </tbody>
            </Table>
        </div>
    )
}

interface props{
    EntityState: IEntity;
    isScrap: boolean
}

interface IEntity {
    //실종개체정보
    name: string;
    gender: number; //암컷 : 0 , 수컷 1
    neuterSurge: boolean; //중성화 O : 1, 중성화 X : 0
    veriChip: boolean; //인식칩 O : 0, 인식칩 X : 1
    age: number;
    weight: string;
    color: string;
    date: string;
    lon: string;
    lan: string;
    significant: string; //특이사항
    imgURL: string;
    address: string;
    location?: string; //전단지 작성시 only
    phone?: string; //전단지 작성시 only
  }

const Table = styled.table([
    css`
    margin: 10px;
    .th{
        width: 120px;
    }
    `
])