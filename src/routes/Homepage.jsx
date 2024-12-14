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
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-2xl text-gray-800 md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ea tempora natus. Pariatur asperiores quam officia dolore.
          </p>
        </div>
        {/* animated button */}
        <Link to="write">
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your Story .
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your Idea .
              </textPath>
            </text>
        </svg>
        </Link>
      </div>
      {/* <Featured Posts/> */}
      {/* <Post Lists/> */}
    </div>
  )
}

export default Homepage