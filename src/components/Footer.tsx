
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">L'IA Inclusive</h3>
            <p className="text-sm text-primary-foreground/80">
              Projet Citoyen Edition 2024/2025<br />
              L'Intelligence Artificielle au service de l'égalité homme-femme
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Accueil</Link></li>
              <li><Link to="/article-1" className="hover:underline">L'influence de l'IA sur les représentations de genre</Link></li>
              <li><Link to="/article-2" className="hover:underline">La cohabitation homme-femme dans les métiers de l'IA</Link></li>
              <li><Link to="/article-3" className="hover:underline">Les défis liés aux biais sexistes</Link></li>
              <li><Link to="/article-4" className="hover:underline">Vers une IA au service de l'égalité</Link></li>
              <li><Link to="/article-5" className="hover:underline">L'impact de l'IA sur la conception du monde</Link></li>
              <li><Link to="/equipe" className="hover:underline">Notre équipe</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm text-primary-foreground/80">
              Campus de Montpellier<br />
              Projet académique 2024/2025<br />
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 L'IA Inclusive. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
