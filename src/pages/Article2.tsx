
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Article2 = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-sm text-muted-foreground hover:text-secondary flex items-center mb-6">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Retour à l'accueil
          </Link>

          <h1 className="article-title">La cohabitation homme-femme dans les métiers de l'IA</h1>
          <p className="article-subtitle">État des lieux et perspectives pour une meilleure parité dans le secteur</p>
          
          <div className="article-meta">
            <span>Axe 2</span>
            <span className="mx-2">•</span>
            <span>Projet Citoyen 2024/2025</span>
          </div>
          
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Homme et femme travaillant sur l'IA" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="article-body">
            <h2>Un déséquilibre persistant dans le secteur de l'IA</h2>
            <p>
              Dans le secteur de l'intelligence artificielle et de la technologie en général, les femmes demeurent significativement sous-représentées, particulièrement dans les rôles techniques tels que le développement, l'ingénierie et la science des données. Cette disparité est d'autant plus préoccupante que ces domaines façonnent activement notre avenir numérique.
            </p>
            
            <div className="stat-highlight">
              <div className="number">22%</div>
              <div className="description">Seulement 22% des postes dans le secteur de l'IA sont occupés par des femmes (UNESCO, 2022)</div>
            </div>

            <p>
              Cette sous-représentation s'accentue à mesure que l'on monte dans la hiérarchie des organisations. Dans les postes de direction technique et les conseils d'administration des entreprises d'IA, la présence féminine devient encore plus rare, limitant ainsi l'influence des femmes sur les orientations stratégiques de cette industrie pourtant cruciale.
            </p>

            <div className="pull-quote">
              "Les algorithmes et systèmes d'IA sont principalement conçus par des hommes, pour tout le monde. Cette asymétrie dans la conception se reflète inévitablement dans les produits finaux."
            </div>

            <h3>Sous-représentation des femmes dans les grandes entreprises d'IA</h3>
            <p>
              Les recherches montrent que moins de 20% des professionnels dans les grandes entreprises d'IA sont des femmes. Cette disparité conduit à des biais dans les algorithmes développés, car les équipes homogènes tendent à reproduire leurs propres perspectives et à négliger involontairement les besoins et expériences différents.
            </p>

            <h3>Manque de modèles féminins et impact sur les jeunes générations</h3>
            <p>
              Les statistiques sont alarmantes : seulement 0,5% des filles de 15 ans dans les pays de l'OCDE envisagent une carrière dans les technologies de l'information et de la communication, contre 5% des garçons. Ce déséquilibre précoce s'explique en partie par le manque de modèles féminins visibles dans ces domaines.
            </p>

            <h2>Origines du déséquilibre</h2>
            <p>
              Plusieurs facteurs expliquent cette sous-représentation féminine dans l'IA :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les stéréotypes de genre persistants qui associent les métiers techniques à des qualités supposément masculines</li>
              <li>Le phénomène du "pipeline qui fuit", où les femmes quittent progressivement le secteur technique à différentes étapes de leur parcours</li>
              <li>Des environnements de travail parfois hostiles ou peu inclusifs</li>
              <li>Le manque de politiques efficaces pour concilier vie professionnelle et vie personnelle</li>
              <li>Des biais inconscients dans les processus de recrutement et d'évaluation</li>
            </ul>

            <h2>Pistes d'amélioration pour une meilleure parité</h2>
            
            <h3>Programmes d'encouragement dès l'éducation</h3>
            <p>
              Il est crucial d'investir dans des programmes STEM (Science, Technology, Engineering, and Mathematics) spécifiquement conçus pour encourager les jeunes filles à s'intéresser aux métiers de la technologie dès le collège et le lycée. Ces initiatives doivent viser à déconstruire les stéréotypes de genre et à présenter des modèles féminins inspirants.
            </p>

            <h3>Mentorat et accompagnement professionnel</h3>
            <p>
              La création de programmes de mentorat pour les femmes peut significativement améliorer leur rétention et leur progression dans le secteur de l'IA. Ces programmes leur donnent accès à des modèles et à des réseaux professionnels précieux, ainsi qu'à des conseils adaptés aux défis spécifiques qu'elles peuvent rencontrer.
            </p>
            
            <div className="pull-quote">
              "Le mentorat ne consiste pas seulement à partager des connaissances, mais aussi à créer des espaces où les femmes peuvent se projeter et se sentir légitimes dans des carrières technologiques."
            </div>

            <h3>Politiques de recrutement équitables</h3>
            <p>
              La mise en place de procédures de recrutement sans biais constitue une étape essentielle. Cela peut inclure des pratiques comme l'anonymisation des CV, la formation des recruteurs sur les questions de diversité, et l'établissement d'objectifs clairs en matière de représentation féminine dans les équipes techniques.
            </p>

            <h2>L'importance d'une diversité de genre dans l'IA</h2>
            <p>
              Au-delà de la simple question d'équité, la diversité de genre dans les équipes d'IA apporte des bénéfices tangibles :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Une meilleure prise en compte des besoins et perspectives diverses dans la conception des produits</li>
              <li>Une réduction des biais algorithmiques liés au genre</li>
              <li>Une plus grande innovation grâce à la diversité des approches et des expériences</li>
              <li>Une amélioration de l'image et de l'attractivité des entreprises</li>
            </ul>
            
            <p>
              Pour conclure, améliorer la parité dans les métiers de l'IA n'est pas seulement une question de justice sociale, mais aussi un impératif stratégique pour assurer que les technologies qui façonnent notre avenir reflètent la diversité de la société qu'elles sont censées servir. Les efforts doivent être soutenus à tous les niveaux, depuis l'éducation jusqu'aux politiques d'entreprise, en passant par les initiatives sectorielles et gouvernementales.
            </p>
          </div>
          
          <div className="border-t border-border mt-12 pt-8">
            <h3 className="font-serif text-xl font-bold mb-4">Articles connexes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/article-1" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-1">L'influence de l'IA sur les représentations de genre</h4>
                <p className="text-sm text-muted-foreground">Comment l'IA peut déconstruire les stéréotypes</p>
              </Link>
              <Link to="/article-3" className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium mb-1">Les défis liés aux biais sexistes dans les systèmes d'IA</h4>
                <p className="text-sm text-muted-foreground">Impact des biais dans les algorithmes</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article2;
