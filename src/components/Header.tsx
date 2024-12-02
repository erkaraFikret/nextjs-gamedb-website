import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b-2 mb-8 sticky top-0 z-10 px-8 py-8 lg:px-20">
      <h1 className="hidden lg:block text-3xl font-bold ">
        <Link href="/">LevelUp DB</Link>
      </h1>

      <div className="flex lg:hidden">{/* mobile menu */}</div>
      <ThemeToggler />
    </header>
  );
};

export default Header;
