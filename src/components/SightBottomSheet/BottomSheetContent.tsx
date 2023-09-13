import { useState } from 'react'
import { css, styled } from 'twin.macro'
import DateSelector from '../DateSelecter'

export default function BottomSheetContent() {
  const [date, setDate] = useState<string>('')
  const [sig, setSig] = useState<string>('')
  const handleChange = (e: any) => {
    const { value } = e.currentTarget
    setDate(value)
  }
  console.log('date', date)
  return (
    <Wrapper>
      <div> 카카오 맵 넣기</div>
      <TextArea
        placeholder="목격시 특이사항을 작성해 주세요"
        onChange={(e: any) => {
          setSig(e.currentTarget.value)
        }}
        value={sig}
      />
      <label> 실종 날짜 </label>
      <DateSelector date={date} setDate={setDate} />
      {/* <Date placeholder="YYYY-MM-DD" onChange={handleChange} value={date} />
      <div> 이미지 컨테이너</div>
      <div>
        <Button> 등록</Button>
      </div> */}
    </Wrapper>
  )
}
/*
들어가야할 정보
lat, lon
특이사항
date
imgURL
*/
const Button = styled.button([
  css`
    width: 100px;
    height: 30px;
    color: white;
    background-color: gray;
    border-radius: 15px;
  `,
])
const Date = styled.input([
  css`
    border: 2px solid lightgray;
    width: 350px;
    padding: 5px 10px;
  `,
])
const TextArea = styled.textarea([
  css`
    width: 350px;
    border: 2px solid lightgray;
    height: 100px;
    border-radius: 10px;
    padding: 10px;
  `,
])
const Wrapper = styled.div([
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
])
