import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <img src="/logo.png" className="w-8 h-8" alt="logo" />
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
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:flex">D</div>
    </section>
  )
}

export default Navbar