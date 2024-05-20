'use client'

import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
// import { MdOutlineContactSupport } from "react-icons/md";
// traduzione
import { useLanguages } from '../../context/LanguageContext';
import { translate } from '../../../utils/translations';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Page = () => {
  const { language } = useLanguages();


  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
      <p className="  text-5xl font-semibold "> {translate('faqTitle',language)}</p>
      <div className="w-1/4 p-[1px] bg-slate-900 my-7 rounded-sm"></div>

      <div className="w-full flex flex-col">
        {/* domanda 1  */}
        <div className="bg-slate-300 group rounded-[12px] shadow-sm  p-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                <HiOutlineMagnifyingGlassCircle size={30} /> {translate('question1',language)}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-center text-2xl">
                  {translate('answer1',language)}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* domanda 2  */}

        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm  p-10 mt-3">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                <HiOutlineMagnifyingGlassCircle size={30} />
                {translate('question2',language)}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-center text-2xl">
                {translate('answer2',language)}
                  <Link
                    href="/contatti"
                    className="text-blue-500 hover:underline"
                  >
                    {translate('linkContact',language)}
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-slate-300 group h-full rounded-[12px] shadow-sm  p-10 mt-3">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                <HiOutlineMagnifyingGlassCircle size={30} />
                {translate('question3',language)}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-center text-2xl">
                {translate('answer3',language)}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <p className="text-2xl py-10">
        {translate('help',language)}
        <Link href="/contatti" className="text-blue-500 hover:underline">
          {translate('helpContact',language)}.
        </Link>
      </p>
    </main>
  );
};

export default Page;
