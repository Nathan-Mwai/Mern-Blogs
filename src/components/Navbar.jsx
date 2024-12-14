import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      {/* Using Link from React router-dom will make it got to the desired routes */}
      <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
        {/* <Image path='logo.png' alt='code base w={32} h={32}'/> */}
        <img src='/Nathan.webp' className="rounded-md" alt="Codebase logo" width={32} height={32}/>
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
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-500">
              Login 👍
            </button>
          </Link>
        </div>
      </div>
      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-500">
            Login 👍
          </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </section>
  );
};

export default Navbar;
