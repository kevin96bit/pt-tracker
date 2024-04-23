import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex items-center justify-center">
      <div className=" w-3/4  flex flex-col min-h-screen items-center">
        <p className=" mt-3 text-4xl font-semibold">La mia missione🚀</p>
        <br />
        <p className="text-2xl">Vi è mai capitato di pensare: </p>
        <p className="text-2xl">
          &quot;Vorrei allenarmi in &quot;x&quot; ma nella mia zona non c&#39;è
          granchè&quot;.
        </p>
        <p className="text-2xl">Oppure:</p>
        <p className="text-2xl">
          &quot;Bello questo sport! Peccato che non conosca nessuno disposto a
          insegnarmelo&quot;.
        </p>
        <p className="text-2xl">O peggio ancora:</p>
        <p className="text-2xl">
          &quot;Non so a chi affidarmi, in rete non si capisce niente&quot;.
        </p>
        <br />
        <p className="text-2xl font-semibold">Ed eccomi qui, pronto ad aiutarti</p>
        {/* icona della rotella */}
        {/* <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path></svg> */}

        <div className="w-full p-[1px] bg-gradient-to-r from-slate-400 via-foreground/10 to-transparent my-5 rounded-sm"></div>

        <div className=" flex w-3/4 h-[40%] mt-2">
          <div className=" w-[50%]">
            <p className="text-3xl font-semibold">
              Perchè proprio questo sito ?
            </p>
            <br />
            <p className=" text-left text-2xl">
              Ti aiuterò a metterti in contatto con professionisti, il tutto in
              modo completamente gratuito. Sarò il tuo tramite, niente di più.
              Aiutare le persone a realizzarsi è qualcosa che vale più del
              denaro, ebbene, quello sarà il mio compenso !
            </p>
            <br />
            <p className="text-center text-2xl">
              Ti reputo un amico e come tale è un piacere aiutarti.😄
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
          Ti allego anche la mia playlist con tracce selezionate da me su
          spotify, magari ti piace
        </p>
        <Link
          href="https://open.spotify.com/playlist/2WMSvE5qX5UFr3Zd4QoNT1?si=4a81c227eaae49d7"
          target="_blank"
        >
          <br />
          <p className="text-2xl text-blue-500 hover:underline">🔥CLICCA QUI🔥</p>
        </Link>
      </div>
    </section>
  );
};

export default page;
