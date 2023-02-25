function Card() {
  return (
    <div className="card m-5 w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://cdn1.ozone.ru/s3/multimedia-e/wc1000/6540921794.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Эко-бутылка с клапаном 1 л.</h2>
        <div className="tabs tabs-boxed w-fit">
          <a className="tab">Черная</a>
          <a className="tab tab-active">Красная</a>
          <a className="tab">Синяя</a>
        </div>
        <div className="card-actions items-center justify-end">
          <p className="text-xl font-bold">228&#8381;</p>
          <button className="btn-primary btn">Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
