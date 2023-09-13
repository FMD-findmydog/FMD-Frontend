import { css, styled } from 'twin.macro'

export default function BottomSheetHeader() {
  return <Header />
}

const Header = styled.div([
  css`
    background-color: lightgray;
    height: 20px;
    width: 398px;
    border-radius: 7px 7px 0px 0px;
  `,
])
