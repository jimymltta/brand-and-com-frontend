import HomePortfolioCard from "./Card";

const Portfolio = ({ portfolios }) => {
  // TODO: Trouver un moyen d'afficher les images s'il y en a
  return (
    <div
      className="py-4"
      style={{
        backgroundImage: `url("./Wave.svg")`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="mb-20 text-3xl font-bold mt-20 ml-32 text-white">
        Portfolio
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 my-8 mb-20">
        {portfolios &&
          portfolios.map((item) => (
            <HomePortfolioCard
              title={item.attributes.Title}
              text={item.attributes.Content}
              image={item.attributes.Image}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
