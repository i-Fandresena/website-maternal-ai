'use client';

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Une mission née d'une <span className="text-primary">urgence</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              En Afrique, chaque jour, des femmes et des enfants meurent de causes tout à fait évitables. Malnutrition, manque d'informations, absence de suivi médical... Les chiffres sont alarmants. C'est pourquoi nous avons décidé d'agir. Notre mission : fournir une information juste, accessible et fiable à chaque femme qui en a besoin. Parce qu'une mère bien informée, c'est une vie sauvée. Deux, en réalité.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Santé maternelle",
                description: "Nous fournissons une information précise et accessible sur la santé maternelle, la nutrition et les soins prénatals essentiels.",
                icon: "👩‍⚕️"
              },
              {
                title: "Santé d'avant",
                description: "Un accompagnement humain et personnalisé pour chaque mère dès le début de sa grossesse jusqu'après l'accouchement.",
                icon: "❤️"
              },
              {
                title: "Santé fœtale",
                description: "Il s'agit de créer une protection globale pour la mère et l'enfant, depuis la conception jusqu'aux premières années.",
                icon: "👶"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <div className="w-12 h-12 bg-[#E05A5A] rounded-full flex items-center justify-center text-xl">
                  {item.icon}
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
