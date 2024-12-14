import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* <BreadCrumbs/> */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>|</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* <Introduction/> */}
      {/* <Featured Posts/> */}
      {/* <Post Lists/> */}
    </div>
  )
}

export default Homepage