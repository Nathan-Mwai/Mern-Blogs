import { useState } from "react"
import { IKImage } from 'imagekitio-react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <IKImage src="/logo.png" className="w-8 h-8" alt="logo" />
            <span>CodebaseBlogs</span>
        </div>
        {/* Menu mobile */}
        <div className="md:hidden">
            <div
            className="cursor-pointer text-4xl"
            onClick={()=>setOpen(prev => !prev)}
            >
                {open? 'X' : "☰" }
            </div>
            {/* mobile link list */}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}>
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Most popular</a>
            <a href="/">About</a>
            <a href="">
                <button className="py-2 px-4 rounded-3xl bg-blue-500">Login 👍</button>
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
                <button className="py-2 px-4 rounded-3xl bg-blue-500">Login 👍</button>
            </a>
        </div>
    </section>
  )
}

export default Navbar