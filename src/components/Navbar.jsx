import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      {/* Using Link from React router-dom will make it got to the desired routes */}
      <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
        {/* <Image path='logo.png' alt='code base w={32} h={32}'/> */}
        <img src='/Nathan.webp' alt="Codebase logo" width={32} height={32}/>
        <span>CodebaseBlogs</span>
      </Link>
      {/* Menu mobile */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* mobile link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most popular</a>
          <a href="/">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-500">
              Login 👍
            </button>
          </a>
        </div>
      </div>
      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most popular</a>
        <a href="/">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-500">
            Login 👍
          </button>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
