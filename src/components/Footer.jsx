import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mx-4 my-12 lg:mx-12">
      <ul className="flex flex-col items-center gap-2 text-center">
        <li>
          <Link
            to="/"
            className="transition duration-300 ease-linear hover:text-amber-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="characters"
            className="transition duration-300 ease-linear hover:text-amber-200"
          >
            Characters
          </Link>
        </li>
      </ul>
      <div className="my-4 grid place-items-center text-center">
        <p className="text-gray-400">&copy; 2025</p>
      </div>
    </footer>
  );
}
