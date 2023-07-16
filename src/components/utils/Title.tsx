import { openSidebar } from "@/store/atoms";
import { Caveat } from "next/font/google";
import { useRecoilState } from "recoil";
import Sidebar from "../main/Sidebar";
const caveat = Caveat({ subsets: ["latin"] });

export default function Title() {
  const [open, setopen] = useRecoilState(openSidebar);
  return (
    <div className={caveat.className}>
      <div className="flex items-center justify-between">
        <span className="px-4 text-3xl">FMD</span>
        <button
          onClick={() => {
            setopen(!open);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      {open ? <Sidebar open={open} /> : null}
    </div>
  );
}
