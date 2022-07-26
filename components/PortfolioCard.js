// line-clamp-{n}

// TODO: trouver un moyen de limiter le <p> à 2 lignes

const PortfolioCard = ({ title, text, image }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:bg-primary transition-colors ease-out duration-300 hover:shadow-lg hover:shadow-gray-700 hover:cursor-pointer">
      {image ? (
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
      ) : null}
      <div className="card-body hover:text-white">
        <h2 className="card-title">{title}</h2>
        <p className="card-text line-clamp-2">{text}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
