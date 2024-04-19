import { Facebook, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex flex-col w-full py-2 bg-slate-800 items-center">
      <p className="text-white font-semibold">SOCIAL :</p>
      <div className="flex justify-evenly w-40 py-3">
      
      <Link href='https://www.linkedin.com/in/kevin-imerti-197440222/' target="_blank"><Linkedin className="text-white hover:text-blue-900"/></Link>
      <Link href='https://it-it.facebook.com/kevin.imerti/' target="_blank"><Facebook className="text-white hover:text-blue-900"/></Link>
      
      </div>
      <p className=" font-semibold text-white">@2024 PT TRACKER</p>
    </div>
  );
};

export default Footer;
