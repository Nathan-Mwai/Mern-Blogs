import { Link } from 'react-router-dom'
import Image from './Image'
const FeaturedPosts = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* first */}
    <div className="flex flex-col gap-4">
        {/* image */}
        <Image
            path='featured1.jpeg'
            className='rounded-3xl object-cover'
        />
        {/* details */}
        <div className='flex items-center gap-4'>
            <h1 className='font-semibold lg:text-lg'>01.</h1>
            <Link className='text-blue-800 lg:text-lg'> Web Design</Link>
            <span className='text-gray-500'>2 days ago</span>
        </div>
        {/* title */}
        <Link to='/test' className='text-xl lg:text-3xl font-semibold lg:front-bold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Link>
    </div>
    {/* other posts */}
    <div className="flex flex-col gap-4">
        {/* second */}
        <div className='flex justify-between gap-4 bg-red-700'>rrrrrr</div>
        {/* third */}
        <div className='flex justify-between gap-4 bg-purple-800'>qqqqq</div>
        {/* fourth */}
        <div className='flex justify-between gap-4 bg-teal-600'>qsqsqs</div>
    </div>
</div>
  )
}

export default FeaturedPosts