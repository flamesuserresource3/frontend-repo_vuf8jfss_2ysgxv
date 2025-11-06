import { Rocket, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-emerald-500/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-sm font-medium">
              <Rocket className="h-4 w-4" />
              Social Media Manager in crescita
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Costruiamo la tua presenza digitale con stile e strategia
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Ciao! Sono un aspirante Social Media Manager. Creo contenuti, strategie e campagne che raccontano il tuo brand e portano risultati reali.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contatti" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-700 transition-colors">
                Iniziamo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 px-5 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Guarda i lavori
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                Contenuti di qualità
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                Strategia su misura
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                Crescita organica
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white">
                <div className="text-center">
                  <Rocket className="mx-auto h-14 w-14 mb-4" />
                  <p className="text-xl font-semibold">Brand Boost</p>
                  <p className="opacity-90 mt-1">Strategia • Contenuti • Community</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Post creati", value: "120+" },
                  { label: "Account gestiti", value: "5" },
                  { label: "Crescita media", value: "+35%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
