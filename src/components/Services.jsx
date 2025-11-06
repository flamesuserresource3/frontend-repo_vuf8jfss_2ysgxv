import { Calendar, Palette, BarChart2, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Content Design",
    desc: "Creazione di grafiche e format coerenti con l'identità del tuo brand.",
  },
  {
    icon: Calendar,
    title: "Piano Editoriale",
    desc: "Calendari mensili, copy mirati e hashtag research per massimizzare la reach.",
  },
  {
    icon: BarChart2,
    title: "Ads & Analytics",
    desc: "Impostazione campagne e analisi KPI per ottimizzare i risultati.",
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    desc: "Gestione DM e commenti per costruire relazioni autentiche.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Cosa posso fare per te</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Pacchetti flessibili e personalizzati in base ai tuoi obiettivi.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow bg-gray-50/50 dark:bg-gray-900/50">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
