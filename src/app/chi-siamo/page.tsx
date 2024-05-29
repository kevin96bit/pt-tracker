'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguages } from '../../context/LanguageContext';
import { translate } from '../../../utils/translations';



const Page = () => {
  const { language } = useLanguages();

  return (
    <section className="flex items-center justify-center">
      
      <div className=" w-3/4  flex flex-col min-h-screen items-center">
        <p className=" mt-3 text-4xl font-semibold">{translate('mission_title', language)} 🚀</p>
        <br />
        <p className="text-2xl">{translate('thoughts', language)}</p>
        <p className="text-2xl">
          {translate('thought_1', language)}
        </p>
        <p className="text-2xl">{translate('thought_2', language)}</p>
        <p className="text-2xl">
          {translate('thought_3', language)}
        </p>
        <p className="text-2xl">{translate('thought_4', language)}</p>
        <p className="text-2xl">
          {translate('thought_5', language)}
        </p>
        <br />
        <p className="text-2xl font-semibold">{translate('help_title', language)}</p>

        <div className="w-full p-[1px] bg-gradient-to-r from-slate-400 via-foreground/10 to-transparent my-5 rounded-sm"></div>

        <div className=" flex w-3/4 h-[40%] mt-2">
          <div className=" w-[50%]">
            <p className="text-3xl font-semibold">
              {translate('why_title', language)}
            </p>
            <br />
            <p className=" text-left text-2xl">
              {translate('why_description', language)}
            </p>
            <br />
            <p className="text-center text-2xl px-2">
              {translate('friendly_note', language)}😄
            </p>
          </div>
          <div className=" w-[50%] ">
            <Image
              src="/ImmagineChiSiamo.jpg"
              width={500}
              height={500}
              alt="Chi siamo immagine"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        <div className="w-full p-[1px] bg-gradient-to-l from-slate-400 via-foreground/10 to-transparent my-5 rounded-sm"></div>
        <p className="text-2xl">
          {translate('playlist_note', language)}
        </p>
        <Link
          href="https://open.spotify.com/playlist/2WMSvE5qX5UFr3Zd4QoNT1?si=4a81c227eaae49d7"
          target="_blank"
        >
          <br />
          <p className="text-2xl text-blue-500 hover:underline">{translate('link_text', language)}</p>
        </Link>
      </div>
    </section>
  );
};

export default Page;
