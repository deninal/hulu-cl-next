import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef( ({ result }, ref) => {
 
    
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <div ref={ref} className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-102 hover:z-1000 border-4 border-green-400 border-opacity-0 hover:border-opacity-100'>
            {/*  eslint-disable-next-line jsx-a11y/alt-text */}
            <Image // Image is from next.js 
                layout='responsive'
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
            }  // search for different path where the image may be
                height={1080}
                width={1920}
            />

            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>

                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
                
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} •`}{" "}
                    {result.release_date || result.first_air_date} •{" "}
                    <StarIcon className='h-5 mx-2'/> {result.vote_average} 
                </p>
            </div>

        </div>
    )
})

export default Thumbnail;
