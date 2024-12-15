import Image from './Image'
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* first */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
            path='featured1.jpeg'
            className='rounded-3xl object-cover'
        />
        {/* details */}
        {/* <div className=''>
            <h1>01.</h1>
        </div> */}
        {/* title */}
        </div>
        {/* other posts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        
        </div>
    </div>
  )
}

export default FeaturedPosts