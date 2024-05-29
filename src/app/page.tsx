'use client'

// placeholder={translate('placeHolderTracker',language)}

import Image from "next/image";
import cards from "../components/cards.json";
import Card from "@/components/Card";
import { useState } from "react";
import { useLanguages } from '../context/LanguageContext';
import { translate } from '../../utils/translations';
import SearchInput from "@/components/geolocalization/SearchInput";

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
  // test
  const handleSelectSuggestion = (lat: number, lon: number) => {
    ([lon, lat]);
  };


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
        <SearchInput onSelectSuggestion={handleSelectSuggestion}/>
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
function setPosition(arg0: number[]) {
  throw new Error("Function not implemented.");
}

