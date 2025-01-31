import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-blue-800">
      <div className="flex justify-between px-4 py-4 lg:px-12">
        <div>
          <a
            to="/"
            className="transition duration-300 ease-linear hover:text-amber-200"
          >
            Home
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                href="/characters"
                className="transition duration-300 ease-linear hover:text-amber-200"
              >
                Characters
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
