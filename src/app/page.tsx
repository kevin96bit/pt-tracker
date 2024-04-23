// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500 ">
      <div className="z-10 bg-blue-400  w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p>eccomi qui</p>
      </div>

      

      {/* griglia da usare in futuro */}
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm   p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm   p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm   p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm   p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm   p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm   p-10">
          Lorem ipsum dolor sit amet.
        </div>
      </div>

      {/* contenitore che racchiude gli input e select */}
      <div className="w-full flex">
        {/* input per avviare la ricerca */}
        <div className="w-56 p-2 rounded-md border flex">
          <div className=" w-10 flex justify-center">
            <svg
              role="img"
              aria-hidden="true"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Lens"
                stroke="none"
                stroke-width="1"
                fill="#aeb9c6"
                fill-rule="evenodd"
              >
                <path d="M15.597 14.205a.989.989 0 0 1 .098.086l5.014 5.014a.993.993 0 1 1-1.404 1.404l-5.014-5.014a1.002 1.002 0 0 1-.086-.098 7 7 0 1 1 1.392-1.392zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
              </g>
            </svg>
          </div>
          <input
            type="search"
            className="r w-full outline-none"
            placeholder="cosa cerchi?"
          ></input>
        </div>
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
            <option value="sport1">Sport 1</option>
            <option value="sport2">Sport 2</option>
            <option value="sport3">Sport 3</option>
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
              xmlnsXlink="http://www.w3.org/1999/xlink" // nota la differenza qui
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
    </main>
  );
}
