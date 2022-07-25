import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

// TODO: Footer, page d'accueil, page contact (avec formulaire), page services, page portfolio
// TODO: Configurer thème DaisyUI pour les couleurs focus par exemple

export default function Home({ portfolios }) {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section className="bg-gray-800 flex justify-center align-center">
        <Cards />
      </section>
      <section>
        <Portfolio
          portfolios={portfolios}
          className="flex justify-center align-center"
        />
      </section>
      <section>
        <Footer />
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

  // console.log("data =>", portfolios[0].attributes.Title);

  return {
    props: { portfolios },
  };
}
