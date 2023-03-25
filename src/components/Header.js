import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="my-5">
      <div className="navbar justify-between gap-5 bg-base-100">
        <div className="flex flex-col gap-1">
          <Link
            to="/"
            className="btn-primary btn font-bold uppercase lg:text-3xl"
          >
            Tupperware
          </Link>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input"
          />
        </div>
        <button className="btn gap-2">
          666&#8381;
          <div className="badge-secondary badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            1
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
