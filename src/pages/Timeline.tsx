import { person } from "../data/person";

export const  Timeline = () => {
    return (
        <main>
            <section className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto p-30">
                {/* Vertical Timeline LINE */}
                <ul className="relative border-l-2 border-gray-700 ml-3.5 space-y-20">
                    {person.timeline.map((event) => (
                        <li key={event.year} className="relative ml-6 flex flex-col gap-3">
                             {/* Bullet point on the line */}
                             <span className="absolute -left-[33px] top-2 flex h-4 w-4 items-center justify-center
                              rounded-full bg-red-900">
                            </span>
                            <h3 className="text-2xl font-bold text-red-900">{event.year}</h3>
                            <h4 className="text-xl font-bold text-red-900">{event.title}</h4>
                            <p className="text-lg">{event.description}</p>
                            <img src={event.image} className="w-full h-auto rounded-lg" />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
};