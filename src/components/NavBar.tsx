
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-border">
      <div className="container mx-auto py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-3xl font-bold">
              <Link to="/" className="text-primary hover:text-secondary transition-colors">
                L'IA Inclusive
              </Link>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Projet Citoyen Edition 2024/2025
            </p>
          </div>
          <nav className="flex flex-wrap justify-center">
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link-active' : 'nav-link'}
            >
              Accueil
            </Link>
            <Link 
              to="/article-1" 
              className={isActive('/article-1') ? 'nav-link-active' : 'nav-link'}
            >
              Représentations
            </Link>
            <Link 
              to="/article-2" 
              className={isActive('/article-2') ? 'nav-link-active' : 'nav-link'}
            >
              Métiers
            </Link>
            <Link 
              to="/article-3" 
              className={isActive('/article-3') ? 'nav-link-active' : 'nav-link'}
            >
              Biais
            </Link>
            <Link 
              to="/article-4" 
              className={isActive('/article-4') ? 'nav-link-active' : 'nav-link'}
            >
              Solutions
            </Link>
            <Link 
              to="/article-5" 
              className={isActive('/article-5') ? 'nav-link-active' : 'nav-link'}
            >
              Impact Social
            </Link>
            <Link 
              to="/equipe" 
              className={isActive('/equipe') ? 'nav-link-active' : 'nav-link'}
            >
              Équipe
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
