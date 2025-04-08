
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    { name: "Hugo DURAND", campus: "MTP" },
    { name: "Meïssane FEKIH", campus: "MTP" },
    { name: "Matisse AMEN-GEORGES", campus: "MTP" },
    { name: "Adel SAIDI", campus: "MTP" },
    { name: "Elsa RIAJODDY", campus: "MTP" },
    { name: "Axel CALCAVECCHIA", campus: "MTP" },
    { name: "Maxime BOUHELIER", campus: "MTP" },
    { name: "Amir IRADI", campus: "MTP" },
    { name: "Elias TRIBAK", campus: "MTP" },
  ];

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

          <h1 className="article-title">Notre Équipe</h1>
          <p className="article-subtitle">Découvrez les membres du projet citoyen 2024/2025</p>
          
          <div className="article-meta">
            <span>Équipe</span>
            <span className="mx-2">•</span>
            <span>Projet Citoyen 2024/2025</span>
          </div>
          
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Équipe de travail collaborative" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="article-body">
            <h2>Présentation de l'équipe</h2>
            <p>
              Notre équipe est composée d'étudiants du campus de Montpellier, réunis autour du thème de l'égalité hommes/femmes. Notre projet se concentre sur « L'Intelligence Artificielle au service de l'égalité homme-femme : défis et opportunités pour une conception inclusive de la société ».
            </p>
            
            <p>
              Ensemble, nous explorons comment l'IA peut soit contribuer à réduire les inégalités de genre, soit risquer de les perpétuer si elle n'est pas conçue avec une perspective inclusive. Notre démarche combine recherche académique, analyse de données et réflexion critique pour proposer des pistes d'amélioration concrètes.
            </p>

            <h2>Membres du groupe de travail</h2>
            
            <div className="bg-muted rounded-lg overflow-hidden my-8">
              <table className="w-full text-left">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="p-4">Nom</th>
                    <th className="p-4">Prénom</th>
                    <th className="p-4">Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => {
                    const [lastName, firstName] = member.name.split(' ');
                    return (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-muted'}>
                        <td className="p-4">{lastName}</td>
                        <td className="p-4">{firstName}</td>
                        <td className="p-4">{member.campus}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h2>Notre méthodologie</h2>
            <p>
              Pour mener à bien ce projet, nous avons adopté une approche pluridisciplinaire combinant :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Recherche documentaire</strong> : Exploration des bases de données académiques, articles scientifiques et rapports d'organisations internationales sur les questions de genre dans l'IA.
              </li>
              <li>
                <strong>Analyse de données</strong> : Étude des statistiques sur la représentation homme-femme dans les métiers de l'IA et évaluation des performances différenciées des systèmes d'IA selon le genre.
              </li>
              <li>
                <strong>Entretiens et témoignages</strong> : Recueil d'expériences de professionnels du secteur pour comprendre les défis concrets rencontrés au quotidien.
              </li>
              <li>
                <strong>Analyse critique</strong> : Évaluation des impacts sociaux des technologies d'IA sur les questions de genre et identification des pistes d'amélioration.
              </li>
            </ul>

            <h2>Notre approche des axes de réflexion</h2>
            <p>
              Notre travail s'articule autour de cinq axes complémentaires, chacun explorant une facette de l'intersection entre IA et égalité de genre :
            </p>
            
            <div className="space-y-4 my-6">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">
                  <Link to="/article-1" className="hover:text-secondary">
                    Axe 1 : L'influence de l'IA sur les représentations de genre
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Comment l'IA peut-elle contribuer à déconstruire les stéréotypes de genre à travers l'analyse et la correction des biais dans les données d'apprentissage ?
                </p>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">
                  <Link to="/article-2" className="hover:text-secondary">
                    Axe 2 : La cohabitation homme-femme dans les métiers de l'IA
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Exploration des inégalités de représentation dans le secteur de l'IA et des initiatives pour encourager une parité dans ce domaine d'innovation.
                </p>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">
                  <Link to="/article-3" className="hover:text-secondary">
                    Axe 3 : Les défis liés aux biais sexistes dans les systèmes d'IA
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Analyse de l'impact des biais algorithmiques sur les décisions automatisées et des solutions pour les identifier et les corriger.
                </p>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">
                  <Link to="/article-4" className="hover:text-secondary">
                    Axe 4 : Vers une IA au service de l'égalité
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Étude des principes et pratiques à adopter pour garantir que les systèmes d'IA soutiennent activement l'égalité des sexes.
                </p>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-medium mb-2">
                  <Link to="/article-5" className="hover:text-secondary">
                    Axe 5 : L'impact de l'IA sur la conception du monde pour les hommes et les femmes
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Exploration de la manière dont les algorithmes influencent différemment les visions du monde selon le genre des utilisateurs.
                </p>
              </div>
            </div>

            <h2>Conclusion du projet</h2>
            <p>
              Ce projet vise à analyser comment l'IA peut être un levier d'égalité homme-femme ou, au contraire, un facteur de renforcement des inégalités. Grâce à notre méthodologie combinant analyses statistiques, enquêtes et recherches académiques, nous explorons des solutions pour une IA plus équitable et inclusive.
            </p>
            
            <p>
              Nous espérons que nos travaux contribueront à la réflexion sur le développement d'une intelligence artificielle qui soit véritablement au service de tous, sans perpétuer ni amplifier les inégalités de genre existantes dans notre société.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
