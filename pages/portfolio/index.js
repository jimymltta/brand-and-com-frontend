import PortfolioCard from "../../components/PortfolioCard";

const PortfolioPage = ({ portfolios }) => {
  return (
    <>
      <div
        className="px-10 pb-10"
        style={{
          background: "rgb(250,149,62)",
          background:
            "linear-gradient(140deg, rgba(250,149,62,1) 0%, rgba(227,164,69,1) 40%, rgba(250,194,62,1) 100%)",
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-4 text-center pt-10">
          Portfolio
        </h1>
        <p className="text-white text-center pb-6">
          Retrouvez tous les projets réalisés par Brand&Com
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {portfolios &&
            portfolios.map((item) => (
              <PortfolioCard
                title={item.attributes.Title}
                text={item.attributes.Content}
                image={item.attributes.Image}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;

// TODO: Trouver un moyen de ne pas répéter cette fonction, la centraliser à un endroit (mais apparemment pas possible avec Next.js)
export async function getStaticProps() {
  // Get portfolio data from Strapi API
  // TODO: move the api URL to a .env file
  const res = await fetch(`http://localhost:1337/api/portfolios`);
  const data = await res.json();
  const portfolios = data.data;

  return {
    props: { portfolios },
  };
}
