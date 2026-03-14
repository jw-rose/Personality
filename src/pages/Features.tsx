import { person } from "../data/person";

export const  Features = () => {
    return (
        <main>
                  {/* Info Cards */}
      <section className=" grid grid-cols-1 p-12">
          {/*Container*/}
          <h2 className="flex flex-col items-center md:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-b from-red-800 to-red-900 mb-16 drop-shadow-[0_4px_4px_rgba(185,28,28,0.5)]">
            Caractéristiques
          </h2>

          <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            {person.infoCards.map((infoCard) => (
              <div key={infoCard.title} className="snap-center w-full p-9 bg-linear-to-b from-zinc-600 via-zinc-800 to-zinc-800 rounded-3xl shadow-2xl border border-white/10 
               transition-transform hover:scale-105 duration-300 ease-in-out
               flex flex-col items-center justify-center text-center">
                <span className="text-xl  text-white font-bold  uppercase tracking-widest mb-2">
                  {infoCard.title}
                </span>

                <div className="flex flex-wrap items-center gap-2 justify-center">
                  {infoCard.value.split(',').map((item,index)=>(
                    <span key={index} className="from-red-800 to-red-900 bg-linear-to-r  text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                      {item.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </section>
        </main>
    );
}