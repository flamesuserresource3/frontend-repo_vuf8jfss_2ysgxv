const projects = [
  {
    title: "Food Startup",
    result: "+48% engagement",
    img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fitness Coach",
    result: "+2.3x reach",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Local Boutique",
    result: "+35% sales",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Portfolio</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Esempi di lavori e format che ho realizzato.</p>
          </div>
          <a href="#contatti" className="hidden sm:inline-block text-indigo-600 hover:text-indigo-700 font-medium">Richiedi una consulenza</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{p.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{p.result}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300">Case</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
