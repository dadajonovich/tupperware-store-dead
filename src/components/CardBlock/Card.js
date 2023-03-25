function Card({ imageUrl, title, price }) {
  return (
    <div className="card m-5 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-96 w-96" src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title text-base">{title}</h2>
        <div className="card-actions items-center justify-end">
          <p className="text-xl font-bold">{price}&#8381;</p>
          <button className="btn-primary btn">Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
