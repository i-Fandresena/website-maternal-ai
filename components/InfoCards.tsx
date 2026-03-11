'use client';

export default function InfoCards() {
  const infoItems = [
    {
      title: "L'abus",
      description: "Il existe aujourd'hui des gestes que seules les mères et les familles peuvent maîtriser pour sauver des vies. L'information n'atteint pas les femmes enceintes."
    },
    {
      title: "Prendre soin",
      description: "Nous transformons les femmes en expertes de leur propre santé. Chaque mère devient capable de reconnaître les signes d'alerte et d'agir rapidement."
    },
    {
      title: "Dignité et",
      description: "À chaque étape du voyage de la maternité, nous accompagnons la femme avec respect, écoute et bienveillance. C'est un droit, pas une faveur."
    },
    {
      title: "Prévention",
      description: "En prévenant les complications, nous évitions les hospitalisations d'urgence coûteuses et souvent inaccessibles. La prévention sauve des vies et des familles."
    },
    {
      title: "Urgence santé",
      description: "Nous formions les femmes à reconnaître les situations d'urgence et à agir vite. Chaque minute compte quand une vie est en jeu."
    },
    {
      title: "Espoir",
      description: "C'est notre conviction : chaque mère en Afrique mérite une chance égale de vivre une grossesse saine et d'avoir des bébés en bonne santé. L'espoir, c'est possible."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Une information juste. Une maman accompagnée.
          </h2>
          <p className="text-xl text-primary font-semibold">
            Une vie sauvée.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F5F3] rounded-lg p-8 hover:shadow-lg transition duration-300 border border-[#E5E0DC]"
            >
              <div className="w-10 h-10 bg-[#E05A5A] rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
