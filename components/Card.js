const Card = ({ title, text, image }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:bg-primary transition-colors ease-out duration-300 hover:shadow-lg hover:shadow-gray-700 hover:cursor-pointer">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default Card;
