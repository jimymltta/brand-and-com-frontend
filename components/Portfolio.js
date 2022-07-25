import Card from "./Card";

const Portfolio = ({ portfolios }) => {
  for (let i = 0; i < portfolios.length; i++) {
    console.log(portfolios[i].attributes.Title);
    const title = portfolios[i].attributes.Title;
  }

  // const image = item.attributes.Image;
  return (
    <>
      <h2 className="mb-20 text-3xl font-bold mt-20 ml-32">Portfolio</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 my-8 mb-20">
        {portfolios &&
          portfolios.map((item) => (
            <Card
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

export default Portfolio;
