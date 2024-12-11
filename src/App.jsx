import Navbar from "./components/Navbar"

const App = () => {
  return (
    // This is for creating a padding on different device settings
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <Navbar/>
      {/* <BreadCrumbs/> */}
      {/* <Introduction/> */}
      {/* <Featured/> */}
      {/* <lists/> */}
    </div>
  )
}

export default App