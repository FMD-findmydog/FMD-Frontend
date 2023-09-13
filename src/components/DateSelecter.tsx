import moment from 'moment'
import { useEffect, useState } from 'react'
import { BiCalendar } from 'react-icons/bi'
interface IDateProps {
  date: string
  setDate: React.Dispatch<React.SetStateAction<string>>
}
const formatCheck =
  /^(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
export default function DateSelector({ date, setDate }: IDateProps) {
  const [isOpenCal, setIsOpenCal] = useState<boolean>(false)
  const format = 'YYYY-MM-DD'
  const today = moment().format('YYYY - MM - DD')
  const checkValidDate = (e: any) => {
    const value = e.target?.value
    const selectedDate = moment(value, format, true)
    const isValid = selectedDate.isValid()
    console.log('selectedDate', selectedDate)
    if (isValid) {
      //포맷 통과
      let dateGap = moment([
        value.slice(0, 4),
        value.slice(5, 7),
        value.slice(8, 10),
      ]).fromNow()
      console.log('dateGap', dateGap)
      if (dateGap.slice(-3) === 'ago') {
        console.log('올바른 날짜 입니다.')
        return true
      } else {
        console.log('현재 시점보다 미래의 날짜는 입력할 수 없습니다.')
        return false
      }
    }else{
      console.log('올바르지 않은 포맷입니다.')
      return false
    }
  }
  const getSeperator = () => {
    const regex = /[^0-9a-zA-Z]+/
    const match = format.match(regex)
    if (match) {
      const symbol = match[0] // 구분자인 - 이 저장됨
      const indexes = []
      for (let i = 0; i < format.length; i++) {
        if (format[i] === symbol) {
          indexes.push(i)
        }
      }
      return { symbol, indexes }
    }
    return { symbol: undefined, indexes: [] }
  }

  const seperator = getSeperator()
  const handleDateChange = (e: any) => {
    let currentDate = e.currentTarget.value
    if (seperator.symbol && seperator.indexes.length > 0) {
      if (currentDate.length === seperator.indexes[0]) {
        currentDate = currentDate + '-'
      } else if (currentDate.length === seperator.indexes[1]) {
        currentDate = currentDate + '-'
      }
    }
    setDate(currentDate)
  }

  return (
    <div className="border-2 flex align-center">
      <input
        type="text"
        value={date}
        placeholder="yyyy-mm-dd"
        onChange={handleDateChange}
        onBlur={checkValidDate}
      />
      <button type="button">
        <BiCalendar />
      </button>
    </div>
  )
}
