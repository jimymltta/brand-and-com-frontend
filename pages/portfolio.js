import PortfolioCard from "../components/PortfolioCard";

const PortfolioPage = ({ portfolios }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <p>Voici la page portfolio</p>
      </div>
      <div>
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
