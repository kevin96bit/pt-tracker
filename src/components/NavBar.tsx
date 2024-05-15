import Link from "next/link";
import { GrContact } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { Button } from "./ui/button";
import { CiLogin } from "react-icons/ci";
import { AiTwotoneHome } from "react-icons/ai";
import { LuFileQuestion } from "react-icons/lu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// import { signOut } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";
import { ModeToggle } from "./SwitchThemeToDark";

// test darkmode

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-slate-300 py-4 border-b border-s-slate-400 w-full flex items-center justify-between">
      {/* Contenitore a sinistra con il logo e i link */}
      <div className=" flex justify-between ml-3 w-1/3">
        {/* div home + logo */}
        <div className="flex items-center">
          {" "}
          {/* Nuovo div per il testo e l'icona */}
          <Link href="/" className="pr-3">
            {/* svg del logo */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 200.000000 177.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M62 885 l3 -825 940 0 940 0 0 822 0 823 -943 3 -942 2 2 -825z m845
467 c75 -43 105 -160 61 -242 -31 -58 -90 -90 -165 -90 l-53 0 0 -95 0 -95
-60 0 -60 0 0 268 c0 148 2 271 4 273 10 10 253 -7 273 -19z m511 -32 l3 -50
-75 0 -76 0 0 -220 0 -220 -60 0 -60 0 -2 218 -3 217 -72 3 -73 3 0 48 c0 26
2 50 4 52 2 2 96 3 208 2 l203 -2 3 -51z m-351 -681 c34 -12 83 -58 83 -76 0
-21 -55 -16 -75 7 -41 45 -115 5 -115 -63 0 -64 75 -101 115 -57 21 23 75 27
75 6 0 -21 -64 -73 -99 -81 -68 -15 -151 60 -151 135 0 47 34 99 80 122 41 21
49 22 87 7z m-647 -24 c0 -22 -4 -25 -35 -25 l-35 0 0 -105 0 -105 -30 0 -30
0 0 105 0 105 -35 0 c-31 0 -35 3 -35 25 l0 25 100 0 100 0 0 -25z m175 0 c34
-33 34 -84 -1 -119 l-27 -26 28 -40 c15 -22 31 -40 35 -40 4 0 29 56 55 126
45 118 49 125 74 122 22 -3 30 -16 68 -113 61 -156 59 -145 24 -145 -24 0 -32
5 -37 25 -6 22 -11 25 -55 25 -44 0 -49 -3 -55 -25 -6 -24 -10 -25 -74 -25
l-67 0 -29 43 -29 42 -3 -42 c-3 -38 -6 -43 -28 -43 l-24 0 0 130 0 130 60 0
c51 0 65 -4 85 -25z m647 -32 l3 -57 38 57 c34 52 40 57 73 57 l36 0 -24 -32
c-13 -18 -35 -47 -48 -65 l-23 -32 40 -53 c59 -80 59 -78 19 -78 -31 0 -39 6
-75 57 l-41 58 0 -58 c0 -54 -1 -57 -25 -57 l-25 0 0 130 0 130 25 0 c22 0 24
-4 27 -57z m318 32 c0 -23 -4 -25 -45 -25 -41 0 -45 -2 -45 -25 0 -23 4 -25
46 -25 44 0 45 -1 42 -27 -3 -25 -7 -28 -45 -31 -38 -3 -43 -6 -43 -28 0 -22
4 -24 45 -24 41 0 45 -2 45 -25 0 -24 -2 -25 -75 -25 l-75 0 0 123 c0 68 3
127 7 130 3 4 37 7 75 7 66 0 68 -1 68 -25z m195 0 c14 -13 25 -36 25 -50 0
-31 -24 -81 -42 -88 -9 -3 -3 -18 20 -50 l33 -47 -34 0 c-29 0 -39 6 -63 43
l-29 42 -3 -42 c-3 -38 -6 -43 -28 -43 l-24 0 0 130 0 130 60 0 c51 0 65 -4
85 -25z"
                />
                <path
                  d="M750 1200 l0 -80 44 0 c36 0 48 5 65 26 47 59 8 134 -69 134 l-40 0
0 -80z"
                />
                <path
                  d="M507 593 c-4 -3 -7 -21 -7 -40 0 -28 3 -33 25 -33 14 0 29 8 35 19
13 25 13 27 -6 45 -16 17 -36 21 -47 9z"
                />
                <path
                  d="M746 537 c-3 -14 -9 -32 -12 -41 -5 -13 1 -16 24 -16 30 0 31 1 20
33 -15 45 -24 52 -32 24z"
                />
                <path
                  d="M1667 594 c-4 -4 -7 -22 -7 -41 0 -28 3 -33 25 -33 13 0 28 7 33 16
10 18 5 54 -8 54 -5 0 -15 2 -22 5 -8 3 -17 2 -21 -1z"
                />
              </g>
            </svg>
          </Link>
          <Link href="/">
            <p className="text-2xl font-semibold hover:text-indigo-600">Home</p>
          </Link>
          <AiTwotoneHome className="ml-1" size={27} />
        </div>
        {/* div chi-siamo */}
        <div className="flex items-center">
          <Link href="/chi-siamo">
            {" "}
            <p className="text-2xl font-semibold hover:text-indigo-600">
              Chi siamo
            </p>
          </Link>
          <FaPeopleGroup className="ml-1" size={27} />
        </div>
        <div className="flex items-center">
          {" "}
          {/* div contatti */}
          <Link href="/contatti">
            <p className=" text-2xl font-semibold hover:text-indigo-600">
              Contatti
            </p>
          </Link>
          <GrContact className="ml-1" size={27} />
        </div>
        <div className="flex items-center">
          {" "}
          {/* div faq */}
          <Link href="/faq">
            <p className=" text-2xl font-semibold hover:text-indigo-600">FAQ</p>
          </Link>
          <LuFileQuestion className="ml-1" size={27} />
        </div>
      </div>

      {/* componente switch */}
      
      <div className="mr-3 flex gap-3">
        {/* switch component */}
        <div>
        <ModeToggle />
      </div>
        <div>
        {session?.user ? (
          // se è loggato distruggi la sessione attraverso un componente, cosi da non trasformare
          // la navbar in 'use client'
          <UserAccountNav />
        ) : (
          <Link href="/accedi">
            <Button className="text-2xl">
              Login <CiLogin />
            </Button>
          </Link>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
