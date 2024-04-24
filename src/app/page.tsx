// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { CgGym } from "react-icons/cg";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5  ">
      {/* contenitore che racchiude gli input e select */}
      <div className="w-full flex justify-center">
        {/* select per la categoria */}
        <div className="w-56 p-2 rounded-md border flex ml-4">
          <div className=" w-10 flex justify-center">
            <Image
              src="https://assets.subito.it/static/icons/cactus/category-squares.svg"
              alt="iconaCategorie"
              width="24"
              height="24"
            />
          </div>
          <select className="r w-full outline-none">
            <option value="">Seleziona uno sport</option>
            <option value="sport1">Bodybuilding</option>
            <option value="sport2">Calisthenics</option>
            <option value="sport3">Powerlifting</option>
            <option value="sport3">CrossFit</option>
            <option value="sport3">Funzionale</option>
          </select>
        </div>
        {/* input per la posizione */}
        <div className="w-56 p-2 rounded-md border flex ml-4">
          <div className=" w-10 flex justify-center">
            <svg
              role="img"
              aria-hidden="true"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className=""
            >
              <g
                id="Pin"
                stroke="none"
                strokeWidth="1"
                fill="#aeb9c6"
                fillRule="evenodd"
              >
                <path d="M12 22c-5.333-5.054-8-9.054-8-12a8 8 0 1116 0c0 2.946-2.667 6.946-8 12zM6 10c0 2.008 1.969 5.156 6 9.207 4.031-4.051 6-7.2 6-9.207a6 6 0 10-12 0zm6 3a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"></path>
              </g>
            </svg>
          </div>
          <input
            type="search"
            className="r w-full outline-none"
            placeholder="Dove ti trovi?"
          ></input>
        </div>
      </div>
      <div className="w-full p-[1px] bg-blue-200 my-5"></div>

      {/* griglia da usare in futuro */}
      <div className="flex flex-col gap-4 items-center">
        {/* pt1 */}
        <div className="bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5 w-3/4">
          <div className="w-[10rem] bg-blue-300 h-[10em] border rounded-[12px]"></div>{" "}
        </div>
        {/* pt2 */}
        <div className="bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5  w-3/4">
          <div className="w-[10rem] bg-blue-300 h-[10em] border rounded-[12px]"></div>{" "}
        </div>
        {/* pt3 */}
        <div className="bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5 w-3/4">
          <div className="w-[10rem] bg-blue-300 h-[10em] border rounded-[12px]"></div>{" "}
        </div>
        {/* pt4 */}
        <div className="bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5 w-3/4">
          <div className="w-[10rem] bg-blue-300 h-[10em] border rounded-[12px]"></div>{" "}
        </div>
        {/* pt5 */}
        <div className="bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5 w-3/4">
          <div className="w-[10rem] bg-blue-300 h-[10em] border rounded-[12px]"></div>{" "}
        </div>
        {/* pt6 */}
        <div className="bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5 w-3/4">
          <div className="w-[10rem] bg-blue-300 h-[10em] border rounded-[12px]"></div>{" "}
        </div>
      </div>
    </main>
  );
}
