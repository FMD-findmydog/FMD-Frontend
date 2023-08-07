import { Inter } from "next/font/google";
import tw, { css, styled } from "twin.macro";

const inter = Inter({ subsets: ["latin"] });
const Hello = styled.div([
  tw`text-center`,
  css`
    color: red;
  `,
]);
export default function Home() {
  return <Hello>hello</Hello>;
}
