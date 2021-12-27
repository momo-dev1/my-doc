import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [transparent, seTransparent] = useState(true);

  useEffect(() => {
    if (window.scrollY > 10) {
      seTransparent(false);
    } else {
      seTransparent(true);
    }
  }, [transparent]);

  return (
    <header
      className={`sticky top-0 w-full backdrop-blur ${
        transparent ? "bg-transparent" : "bg-gray-900/75"
      } border-b border-gray-50/[0.06] z-[100]`}
    >
      <nav className="flex items-center justify-between w-full max-w-screen-xl px-4 py-4 mx-auto sm:px-6 md:px-8 ">
        <Link href="/">
          <div className="flex items-center flex-1 gap-2 cursor-pointer">
            <BookIcon />
            <h3 className="font-bold tracking-wide text-white">
              My Documentation
            </h3>
          </div>
        </Link>
        <div className="relative flex items-center">
          <SearchIcon />
          <input
            type="text"
            placeholder="Quick search..."
            className=" w-64 items-center text-sm leading-6 text-gray-400 rounded-md ring-1  shadow-sm py-1.5 pl-10 pr-3 hover:ring-gray-300 bg-gray-800 highlight-white/5 hover:bg-gray-700"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

function SearchIcon() {
  return (
    <svg
      className="absolute flex-none w-6 h-6 left-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-white w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}
