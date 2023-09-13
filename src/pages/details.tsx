import SightBottomSheet from '@/components/SightBottomSheet/SightBottomSheet'
import { useState } from 'react'

export default function Details() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const onSightButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('e.target', e.target)
    setIsSheetOpen(!isSheetOpen)
  }
  return (
    <>
      <button onClick={onSightButtonClick}> 목격신고등록하기 </button>
      <SightBottomSheet isSheetOpen={isSheetOpen} />
    </>
  )
}
