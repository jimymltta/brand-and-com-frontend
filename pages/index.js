import Head from "next/head";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Explanations from "../components/Explanations";
import Portfolio from "../components/Portfolio";

// TODO: Pages services, page portfolio
// TODO: Configurer thème DaisyUI pour les couleurs focus par exemple

export default function Home({ portfolios }) {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="bg-gray-800 flex justify-center align-center">
        <Cards />
      </section>
      <section className="bg-red-400">
        <Explanations />
      </section>
      <section>
        <Portfolio
          portfolios={portfolios}
          className="flex justify-center align-center"
        />
      </section>
    </div>
  );
}

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
