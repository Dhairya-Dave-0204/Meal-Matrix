import React, { useState } from 'react';
import { Card } from '../component_index'
import reviews from './data'

function Testimonail(props) {
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0)
            setIndex(reviews.length-1);
        else
            setIndex(index-1);
        // setIndex(Math.abs(index-1)%reviews.length);
    }
    
    function rightShiftHandler() {
        // setReviews(reviews);
        if(index + 1 >= reviews.length)
            setIndex(0);
        else
            setIndex(index+1);
    }

    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * reviews.length));
    }
    
    return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
            
            <Card review = {reviews[index]}></Card>
            {/* if we use map then all the cards will be displayed/returned instead of only one needed at a time */}
            <div className='flex mx-auto text-3xl font-bold mt-5 gap-3 text-violet-400'>
                <button className='hover:text-violet-500' onClick={leftShiftHandler} >
                <i className="ri-arrow-left-line"></i>
                </button>
                <button className='hover:text-violet-500' onClick={rightShiftHandler}>
                <i className="ri-arrow-right-line"></i>
                </button>
            </div>  
            <div className='mt-5 mx-auto'>
                <button onClick={surpriseHandler} className='text-lg transition-all duration-200 bg-violet-400 hover:bg-violet-500 px-10 py-2 rounded-md font-bold text-white'>Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonail