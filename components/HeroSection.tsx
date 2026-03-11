'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-10">
              <h1 className="text-2xl md:text-5xl font-extrabold w-185">
                Et si on vous disait que vous pouvez, 
                vous aussi, <span className="text-primary">sauver deux vies ?</span> 
              </h1>
              <p className="text-gray-700 w-180 font-regular">
                Bienvenu dans le mouvement ! Un geste, une donnée, une réponse au bon moment. Parfois, c'est tout ce qu'il faut pour sauver deux vies. <span className="font-bold">Maternal.AI</span> réinvente la grossesse en Afrique en transformant les données de santé maternelle en une prise de décision éclairée, avec une technologie attentive, une approche humaine et la force des communautés.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center pt-5">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-2 text-sm font-medium">
                Rejoindre le mouvement
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-2 text-sm font-medium">
                Découvrir la solution
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-16 pt-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-gray-900">15+</div>
                <p className="text-gray-600 text-sm mt-1">Volontaires actifs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-gray-900">5</div>
                <p className="text-gray-600 text-sm mt-1">Régions couvertes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-gray-900">1000+</div>
                <p className="text-gray-600 text-sm mt-1">Femmes sensibilisées</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center h-96 md:h-full">
            <div className="relative w-full max-w-sm h-full flex items-center justify-center">
              <Image
                src="/images/pregnant-woman.png"
                alt="Femme enceinte illustration"
                width={400}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
