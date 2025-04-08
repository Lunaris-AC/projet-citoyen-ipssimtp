
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
}

const ArticleCard = ({ title, description, link, imageUrl }: ArticleCardProps) => {
  return (
    <div className="article-card">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold mb-3">
          <Link to={link} className="hover:text-secondary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-secondary hover:underline"
        >
          Lire l'article
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
