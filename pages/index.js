import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

// TODO: Footer, page d'accueil, page contact (avec formulaire), page services, page portfolio
// TODO: Utiliser Strapi pour la partie portfolio
// TODO: Configurer thème DaisyUI pour les couleurs focus par exemple

export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section className="bg-gray-800 flex justify-center align-center">
        <Cards />
      </section>
    </div>
  );
}
