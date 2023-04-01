import React from 'react';

const Questions = () => {
    return (
        <div className='mt-10 md:mt-0'>
            <div tabIndex={0} className="collapse collapse-arrow border border-sky-600 bg-info bg-opacity-10 rounded-box md:w-11/12 w-10/12 mx-auto mb-3">
                <div className="collapse-title md:text-xl font-semibold text-sm items-center flex ">
                    Difference between Props vs state ?
                </div>
                <div className="collapse-content">
                    <p className='font-medium'>Props : <span className='font-normal'>props is the short form of properties. Props in only readable. That means we can't change its value.</span></p>
                    <p className='font-medium'>State : <span className='font-normal'>On the other hand, the data on the state can be changeable. We can modify the data of a state.</span></p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-sky-600 bg-info bg-opacity-10 rounded-box md:w-11/12 w-10/12 mx-auto mb-3">
                <div className="collapse-title md:text-xl font-semibold text-sm items-center flex ">
                    How does useState work ?
                </div>
                <div className="collapse-content">
                    <p className='font-normal'>useState works in asynchronous way. At first we have to give it an initial value. The value can be ( 0, [], "" ) whatever. Then we can send data into the state.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-sky-600 bg-info bg-opacity-10 rounded-box md:w-11/12 w-10/12 mx-auto mb-3">
                <div className="collapse-title md:text-xl font-semibold text-sm items-center flex ">
                    How does useState work ?
                </div>
                <div className="collapse-content">
                    <p className='font-normal'>useState works in asynchronous way. At first we have to give it an initial value. The value can be ( 0, [], "" ) whatever. Then we can send data into the state.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-sky-600 bg-info bg-opacity-10 rounded-box md:w-11/12 w-10/12 mx-auto mb-3">
                <div className="collapse-title md:text-xl font-semibold text-sm items-center flex ">
                    Purpose of useEffect ?
                </div>
                <div className="collapse-content">
                    <p className='font-normal'>useEffect perform side effects functionality. It can manage timers and intervals. Event listeners can be used inside it.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-sky-600 bg-info bg-opacity-10 rounded-box md:w-11/12 w-10/12 mx-auto mb-20">
                <div className="collapse-title md:text-xl font-semibold text-sm items-center flex ">
                    How Does React work? ?
                </div>
                <div className="collapse-content">
                    <p className='font-normal'>React works by using a virtual representation of the actual web page, called the virtual DOM, React compares the new virtual DOM tree with the previous virtual DOM tree to determine which parts of the actual DOM need to be updated.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;