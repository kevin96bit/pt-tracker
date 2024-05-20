'use client'

import Image from "next/image";
import cards from "../components/cards.json";
import Card from "@/components/Card";
import { useState } from "react";
import { useLanguages } from '../context/LanguageContext';
import { translate } from '../../utils/translations';

// Interfaccia per il funzionamento del select 
interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  disciplina: string;
}

const Home: React.FC = () => {
  const { language } = useLanguages();


  const [selectedDisciplina, setSelectedDisciplina] = useState<string>('');

  const handleDisciplinaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisciplina(event.target.value);
  };

  const filteredCards: CardData[] = selectedDisciplina !== 'tutto'
  ? cards.filter(card => card.disciplina === selectedDisciplina)
  : cards;

  return (
    <main className="flex min-h-screen flex-col p-5">
      {/* Contenitore che racchiude gli input e select */}
      <div className="w-full flex justify-center">
        {/* Select per la categoria */}
        <div className="w-56 p-2 rounded-md border flex ml-4">
          <div className="w-10 flex justify-center">
            <Image
              src="https://assets.subito.it/static/icons/cactus/category-squares.svg"
              alt="iconaCategorie"
              width="24"
              height="24"
            />
          </div>
          <select
            className="r w-full outline-none"
            value={selectedDisciplina}
            onChange={handleDisciplinaChange}
          >
            <option disabled value="">{translate("select",language)}</option>
            <option value="Bodybuilding">Bodybuilding</option>
            <option value="Calisthenics">Calisthenics</option>
            <option value="Powerlifting">Powerlifting</option>
            <option value="CrossFit">CrossFit</option>
            <option value="Funzionale">{translate("functionalTraining",language)}</option>
            <option value="tutto">{translate("showAll",language)}</option>
          </select>
        </div>
        {/* Input per la posizione */}
        <div className="w-56 p-2 rounded-md border flex ml-4">
          <div className="w-10 flex justify-center">
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
            placeholder={translate('placeHolderTracker',language)}
          ></input>
        </div>
      </div>

      {/* Griglia dei card filtrati */}
      <div className="w-full p-[1px] bg-blue-200 my-5"></div>

      <div className="flex flex-col gap-4 items-center">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            disciplina={card.disciplina}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
