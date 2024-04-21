const page = () => {
  return (
    <section className="flex items-center justify-center">
      <div className=" w-3/4  flex flex-col h-screen items-center">
        <p className=" mt-3 text-4xl font-semibold">La mia missione🚀</p>
        <br />
        <p className="text-2xl">Vi è mai capitato di pensare: </p>
        <p className="text-2xl">
          &quot;Vorrei allenarmi in &quot;x&quot; ma nella mia zona non c&#39;è
          granchè&quot;.
        </p>
        <br />
        <p className="text-2xl">Oppure:</p>
        <p className="text-2xl">
          &quot;Bello questo sport! Peccato che non conosca nessuno disposto a
          insegnarmelo&quot;.
        </p>
        <br />
        <p className="text-2xl">O peggio ancora:</p>
        <p className="text-2xl">
          &quot;Non so a chi affidarmi, in rete non si capisce niente&quot;.
        </p>
        {/* icona della rotella */}
        <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path></svg>
    
      </div>

    </section>
  );
};

export default page;


