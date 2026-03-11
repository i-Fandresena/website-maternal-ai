'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">❤️</span>
              </div>
              <span className="font-bold text-lg">Santé Maternelle</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Une mission née d'une urgence pour réinventer la santé maternelle en Afrique.
            </p>
          </div>

          {/* À propos */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">À propos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-primary transition">Qui sommes-nous</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Notre mission</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Notre impact</Link></li>
              <li><Link href="#" className="hover:text-primary transition">L'équipe</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Ressources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-primary transition">Formations</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Guides</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Articles</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Statistiques</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="mailto:contact@sante-maternelle.org" className="hover:text-primary transition">Email</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Téléphone</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Adresse</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Formulaire</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm">Recevez nos dernières actualités et formations</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded text-gray-900 text-sm"
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 px-4 py-2 rounded font-semibold transition">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Santé Maternelle en Afrique. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition">Confidentialité</Link>
              <Link href="#" className="hover:text-primary transition">Conditions</Link>
              <Link href="#" className="hover:text-primary transition">Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
