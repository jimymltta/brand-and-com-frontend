import Card from "./Card";

// props content = title, text, image passing to Card component

const CardsSection = ({ title, text, image }) => {
  return (
    <div>
      <h1 className="text-white mb-5 text-3xl font-bold mt-5">Services</h1>
      <div className="flex gap-6 my-8">
        <Card
          title="Community Management"
          text="Gestion de votre communauté, création de contenu, interactions et suivi des statistiques."
          image="https://placeimg.com/400/225/arch"
        />
        <Card
          title="Amélioration de la notoriété"
          text="Série d'actions pour améliorer la notoriété de votre marque : publicité, communication..."
          image="https://placeimg.com/400/225/arch"
        />
        <Card
          title="Marketing digital"
          text="Actions visées de marketing digital : publicité, communication, réseaux sociaux, augmentation du trafic..."
          image="https://placeimg.com/400/225/arch"
        />
      </div>
      <div className="my-6">
        <h2 className="mb-6 text-lg font-bold text-white">
          Vous êtes intéressé.e par l'un de ces services ?
        </h2>
        <button className="btn bg-primary text-white hover:bg-hover">
          On discute ?
        </button>
      </div>
    </div>
  );
};

export default CardsSection;
