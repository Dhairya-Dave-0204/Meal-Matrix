import React from 'react'

function Card(props) {
    let review = props.review;

    return (
      <div className='flex flex-col md:relative rounded-md'>
        
        <div className="absolute top-[-7rem] z-[10] mx-auto">
          <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" alt="" src={review.image}/>
          <div className='w-[140px] h-[140px] bg-primary rounded-full absolute top-[-6px] left-[10px] -z-[20]'></div>
        </div>
        
        <div className='text-center mt-7'>
                  <p className="text-2xl tracking-wider font-bold capitalize">{review.name}</p>
                  <p className='text-primary opacity-60 uppercase text-sm'>{review.job}</p>
        </div>
  
        <div className='mx-auto mt-5'>
            <i className="ri-double-quotes-l"></i>
        </div>
  
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
  
        <div className='mx-auto mt-5'>
            <i className="ri-double-quotes-r"></i>
        </div>
  
      </div>
    )
}

export default Card