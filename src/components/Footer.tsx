import { FaFacebookSquare } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex flex-col w-full py-2 bg-slate-800 items-center">
      <p className="text-white font-semibold">SOCIAL :</p>
      <div className="flex justify-evenly w-40 py-3">
        <Link
          href="https://www.linkedin.com/in/kevin-imerti-197440222/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className=" text-white hover:text-blue-900"
            width="40"
            height="38"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Link>
        <Link href="https://it-it.facebook.com/kevin.imerti/" target="_blank">
          <FaFacebookSquare className="text-white w-10 h-9 hover:text-blue-900" />
        </Link>
      </div>
      <p className=" font-semibold text-white">@2024 PT TRACKER</p>
    </div>
  );
};

export default Footer;
