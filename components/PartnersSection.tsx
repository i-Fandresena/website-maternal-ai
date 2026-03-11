'use client';

export default function PartnersSection() {
  const partners = [
    { name: "African Union", color: "bg-yellow-300" },
    { name: "Global Health", color: "bg-green-500" },
    { name: "UN Women", color: "bg-blue-500" },
    { name: "UNICEF", color: "bg-pink-400" },
    { name: "WHO", color: "bg-red-500" },
  ];

  const initiatives = [
    {
      number: "01",
      title: "Formation et Sensibilisation",
      description: "Nous formons les femmes à reconnaître les signes de complications et à accéder aux soins. La sensibilisation commence au sein des communautés."
    },
    {
      number: "02",
      title: "Accès aux Services",
      description: "Nous établissons des partenariats avec des cliniques et des hôpitaux locaux pour garantir que chaque femme puisse accéder aux soins dont elle a besoin."
    },
    {
      number: "03",
      title: "Suivi et Soutien",
      description: "Un accompagnement continu : avant, pendant et après l'accouchement. Nous ne laissons personne de côté."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ensemble, réinventons la <span className="text-primary">santé maternelle en Afrique</span>
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-12 h-12 ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-xs text-center`}>
                {partner.name.substring(0, 2)}
              </div>
              <span className="text-gray-700 font-semibold text-sm">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Initiatives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-[#F7F5F3] rounded-lg p-8 border border-[#E5E0DC] hover:shadow-lg transition">
              <div className="text-4xl font-bold text-primary mb-4">{initiative.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
              <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
