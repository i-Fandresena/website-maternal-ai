'use client';

import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="py-16 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Une mission née d'une <span className="text-primary">urgence</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Maternal AI est née en 2024-2025 d'un constat simple mais alarmant : en Afrique, et particulièrement à Madagascar, trop de femmes enceintes n'ont pas accès aux informations et au suivi médical dont elles ont besoin.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl">
              Notre équipe de 9 personnes passionnées a décidé de combiner l'intelligence artificielle et l'approche humaine pour créer une solution accessible à toutes, que ce soit via smartphone, SMS ou grâce à nos relais communautaires.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Notre promesse",
                description: "Mise en relation des femmes enceintes et parents avec les professionnels de santé",
                icon: "/images/chart-column.png"
              },
              {
                title: "Zones d'action",
                description: "Analamanga, Itasy, Vakinankaratra, Haute Matsiatra, Antsinanana",
                icon: "/images/newspaper.png"
              },
              {
                title: "Notre équipe",
                description: "9 salariés passionnés par la santé maternelle et l'innovation",
                icon: "/images/message-circle.png"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <div className="w-12 h-12 bg-[#353535] rounded-full flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} width={24} height={24} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
