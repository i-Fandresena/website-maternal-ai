'use client';

import { Button } from '@/components/ui/button';

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Coral tinted Background */}
          <div className="bg-[#FDF6F4] rounded-lg p-12 flex flex-col justify-center space-y-6 border border-[#F0D5CF]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Pas "Un Besoin Éducatif"
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              L'éducation en santé maternelle n'est pas un supplément. C'est la base de tout. Quand une femme enceinte sait reconnaître les signes d'alerte, quand elle comprend l'importance de la nutrition, quand elle sait où se faire soigner... c'est une vie qu'on sauve. Deux, en réalité.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 w-fit">
              En savoir plus
            </Button>
          </div>

          {/* Right Column - Light Beige Background */}
          <div className="bg-[#F7F5F3] rounded-lg p-12 flex flex-col justify-center space-y-6 border border-[#E5E0DC]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              La Nutrition & Les Consommations
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Une mère bien nourrie donne naissance à un enfant en bonne santé. Pourtant, beaucoup de femmes enceintes en Afrique souffrent de malnutrition. Nous apportons des conseils nutritionnels personnalisés, adaptés à la culture et aux ressources locales. Parce que la nutrition est une forme de prévention des complications gravissimes.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 w-fit">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
