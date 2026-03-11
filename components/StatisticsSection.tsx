'use client';

export default function StatisticsSection() {
  const stats = [
    { number: "15+", label: "Volontaires actifs" },
    { number: "5", label: "Régions couvertes" },
    { number: "1000+", label: "Familles aidées" },
    { number: "5", label: "Centres de formation" }
  ];

  return (
    <section className="bg-gray-900 py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Des chiffres qui parlent d'<span className="text-primary">espoir</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Chaque chiffre représente une vie touchée, une famille sauvée, un enfant qui a une meilleure chance dans la vie.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
