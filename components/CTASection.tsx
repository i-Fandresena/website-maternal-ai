'use client';

import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#F7F5F3] to-[#FDF6F4] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Prêt à rejoindre le <span className="text-primary">mouvement</span> ?
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Que vous soyez une femme enceinte qui a besoin de support, un professionnel de santé, un volontaire ou simplement quelqu'un qui croit qu'on peut changer la santé maternelle en Afrique... nous avons une place pour vous.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base">
            Rejoindre maintenant
          </Button>
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-base">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
