const page = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-3/4 flex flex-col h-screen items-center justify-center">
        <div className="w-3/4 border h-2/3">
          <div className="w-full h-14 bg-blue-400 ">
            <div className=" w-full h-full flex justify-end items-center">
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
              <div className="w-20 h-4 bg-slate-300 rounded-md mr-12"></div>
            </div>
          </div>
          <div className="flex w-full h-full">
            <div className="w-[50%] border"><p className="text-7xl mt-3">Contattami</p></div>
            <div className="w-[50%] border">2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
