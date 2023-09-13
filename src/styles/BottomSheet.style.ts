import { css, styled } from 'twin.macro'

export const Wrapper = styled.div(
  ({ isSheetOpen }: { isSheetOpen: boolean }) => [
    css`
      display: flex;
      flex-direction: column;
      position: fixed;
      bottom: 0;
      right: 20px;
      top: 50vh;
      z-index: 1;
      background-color: #fff;
      width: 400px;
      border: 2.5px solid lightgray;
      border-radius: 8px 8px 0px 0px;
      transition-property: height;
      transition-duration: 3s;
    `,
    isSheetOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `,
  ]
)
