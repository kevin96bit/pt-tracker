// components/Card.tsx
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface CardProps {
  image: string;
  title: string;
  description: string;
  disciplina: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, disciplina }) => {
  return (
    <div className="flex mb-3 bg-slate-300 hover:bg-blue-200  rounded-[12px] shadow-sm  p-5 w-3/4">
      {/* immagine */}
      <div className="w-[15rem] bg-blue-300 h-[10em]  rounded-[12px]">
        <Image className="rounded-[12px] w-[110%] h-[100%]" src={image} width={500} height={500} alt={title} />
      </div>{" "}
      {/* testo */}
      <div className=" px-5  w-full">
      <h1 className="text-left text-2xl font-semibold">{title}</h1>
      <br />
      <p>{description}</p>
      <br />
      <p className=" font-semibold">{disciplina}</p>
      </div>
      <Button className="my-auto">Contatta</Button>
    </div>
  );
};

export default Card;
