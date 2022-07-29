import React from "react";

import { handlePortfolioClick } from "../helpers/functions";

// TODO: lien vers chaque item (voir functions.js)

function PortfolioCard({ title, text, image }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-6 my-6">
      <div className="card-body">
        <h2 className="card-title uppercase underline underline-offset-2 decoration-primary decoration-2 mb-2">
          {title}
        </h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-primary border-primary hover:bg-hover hover:border-hover">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
