import NotFoundPick from '../assets/img/404.jpg';

function NotFoundBlock() {
  return (
    <div className="hero my-5 h-4/5 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="404"
          src={NotFoundPick}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Ничего не найдено...</h1>
          <p className="py-6">
            К сожалению вы перешли на несуществующую страницу
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundBlock;
