import { Wrapper } from '@/styles/BottomSheet.style'
import BottomSheetContent from './BottomSheetContent'
import BottomSheetHeader from './BottomSheetHeader'
export default function SightBottomSheet({
  isSheetOpen,
}: {
  isSheetOpen: boolean
}) {
  return (
    <>
      <Wrapper isSheetOpen={isSheetOpen}>
        <BottomSheetHeader />
        <BottomSheetContent />
      </Wrapper>
    </>
  )
}
