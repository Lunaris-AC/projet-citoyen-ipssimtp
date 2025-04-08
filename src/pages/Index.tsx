
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { Link } from 'react-router-dom';

const Index = () => {
  const articles = [
    {
      id: 1,
      title: "L'influence de l'IA sur les représentations de genre",
      description: "Comment l'IA peut-elle contribuer à déconstruire les stéréotypes de genre ? Analyse des biais présents dans les données d'apprentissage et des solutions pour créer des algorithmes plus équitables.",
      link: "/article-1",
      imageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "La cohabitation homme-femme dans les métiers de l'IA",
      description: "Exploration de l'égalité des sexes dans le secteur de l'IA, avec seulement 22% de femmes dans ce domaine. Découvrez les obstacles à l'inclusion et les initiatives pour encourager la parité.",
      link: "/article-2",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Les défis liés aux biais sexistes dans les systèmes d'IA",
      description: "Les algorithmes d'IA sont influencés par les données utilisées pour leur entraînement. Discussion sur l'impact de ces biais sur les décisions prises par les systèmes d'IA.",
      link: "/article-3",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Vers une IA au service de l'égalité",
      description: "Analyse des pistes pour une IA éthique et inclusive, en considérant la diversité des perspectives hommes-femmes dès les phases de conception des technologies.",
      link: "/article-4",
      imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "L'impact de l'IA sur la conception du monde",
      description: "Exploration de la manière dont les algorithmes influencent les visions du monde des utilisateurs en fonction de leur genre, et des responsabilités des concepteurs.",
      link: "/article-5",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              L'Intelligence Artificielle au service de l'égalité homme-femme
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Défis et opportunités pour une conception inclusive de la société
            </p>
            <Link 
              to="/equipe"
              className="inline-flex items-center bg-white text-secondary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Découvrir notre équipe
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Nos Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                link={article.link}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">
              À propos du projet
            </h2>
            <p className="text-lg mb-8">
              Ce projet citoyen analyse comment l'IA peut être un levier d'égalité homme-femme ou, au contraire, un facteur de renforcement des inégalités. Grâce à une méthodologie combinant analyses statistiques, enquêtes et recherches académiques, nous explorons des solutions pour une IA plus équitable et inclusive.
            </p>
            <Link 
              to="/equipe"
              className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              Rencontrez notre équipe
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
