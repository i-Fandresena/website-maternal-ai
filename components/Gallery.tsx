'use client';

export default function Gallery() {
  const galleryItems = [
    { id: 1, emoji: "👩‍⚕️", title: "Formation des sages-femmes" },
    { id: 2, emoji: "👨‍👩‍👧‍👦", title: "Accompagnement familial" },
    { id: 3, emoji: "📱", title: "Éducation digitale" },
    { id: 4, emoji: "❤️", title: "Centres de santé" },
    { id: 5, emoji: "🌍", title: "Impact communautaire" },
    { id: 6, emoji: "🙌", title: "Engagement collectif" }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des chiffres qui parlent d'<span className="text-primary">espoir</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Nos actions au quotidien pour transformer la santé maternelle en Afrique
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#F7F5F3] rounded-lg overflow-hidden aspect-square cursor-pointer hover:shadow-xl transition duration-300 border border-[#E5E0DC]"
            >
              {/* Image Background */}
              <div className="w-full h-full flex items-center justify-center bg-[#FAF8F6]">
                <div className="text-8xl">
                  {item.emoji}
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
