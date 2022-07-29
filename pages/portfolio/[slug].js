export default function SinglePortfolio({ portfolio }) {
  return (
    <div className="bg-primary my-10">
      <h1 className="text-3xl font-bold text-center">
        {portfolio.attributes.Title}
      </h1>
      <p className="text-center">
        Projet terminé le {portfolio.attributes.Date}
      </p>
    </div>
  );
}

// TODO: Trouver un moyen de récupérer la Category et les Images de l'item. Pour le moment on ne les récupère pas dans le fetch().

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/portfolios");
  const portfolios = await res.json();

  const paths = portfolios.data.map((portfolio) => ({
    params: { slug: portfolio.attributes.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/api/portfolios?Slug=${slug}`);
  const data = await res.json();
  const portfolio = data.data[0];

  return {
    props: { portfolio },
  };
}
