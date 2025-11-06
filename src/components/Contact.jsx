import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Fake delay to simulate submission
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Parliamo del tuo progetto</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Scrivimi per una consulenza gratuita o un preventivo su misura.</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700 dark:text-gray-300">Nome</label>
              <input required className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Il tuo nome" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
              <input required type="email" className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="nome@email.com" />
            </div>
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-gray-700 dark:text-gray-300">Messaggio</label>
              <textarea required rows={4} className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Raccontami di te e dei tuoi obiettivi" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Mail className="h-4 w-4" />
              Risposta entro 24h
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-700 transition-colors">
              Invia
              <Send className="h-4 w-4" />
            </button>
          </div>
          {status === "success" && (
            <p className="mt-4 text-green-600">Grazie! Ti risponderò al più presto.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600">Ops, qualcosa è andato storto. Riprova.</p>
          )}
        </form>
      </div>
    </section>
  );
}
