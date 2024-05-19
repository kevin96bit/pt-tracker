'use client'

import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
import { MdOutlineContactSupport } from "react-icons/md";
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
  return (
    <main className="flex min-h-screen  flex-col items-center p-24">
      <p className="  text-5xl font-semibold "> Domande frequenti</p>
      <div className="w-1/4 p-[1px] bg-slate-900 my-7 rounded-sm"></div>

      <div className="w-full flex flex-col">
        {/* domanda 1  */}
        <div className="bg-slate-300 group rounded-[12px] shadow-sm  p-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {" "}
                <HiOutlineMagnifyingGlassCircle size={30} /> Qual&#39;è il costo del servizio
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-center text-2xl">
                  Il sito <span className="underline">non ha costi</span>,
                  nel momento in cui ti metterai in contatto con la persona da
                  te scelta il nostro servizio si conclude.
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
                Ho problemi con il mio personal trainer, cosa devo fare?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-center text-2xl">
                  Al fine di evitare questi problemi, consigliamo sempre di
                  segnalarlo motivando il problema attraverso la pagina{" "}
                  <Link
                    href="/contatti"
                    className="text-blue-500 hover:underline"
                  >
                    Contatti
                  </Link>
                  .{" "}
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
                Quali sono i criteri utilizzati per selezionare i personal
                trainer?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-center text-2xl">
                  Ogni personal trainer presente sul sito è tenuto a possedere{" "}
                  <span className=" underline">esperienza</span> nel campo
                  dell&#39;allenamento personale e, se in possesso, una{" "}
                  <span className=" underline">certificazione</span>{" "}
                  riconosciuta nel settore. Ci assicureremo personalmente che i
                  personal trainer iscritti abbiano le competenze e la
                  qualificazione necessarie per offrire un servizio
                  professionale e di alta qualità.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <p className="text-2xl py-10">
        Se la tua domanda non è tra quelle già presenti non esitare a{" "}
        <Link href="/contatti" className="text-blue-500 hover:underline">
          contattarci.
        </Link>
      </p>
    </main>
  );
};

export default Page;
