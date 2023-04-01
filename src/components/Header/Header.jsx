import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto text-3xl font-bold mt-10 flex items-center justify-between px-4 md:px-9'>
            <h1>Knowledge <span className='text-primary'>Cafe</span></h1>
            <div>
                <img className='w-16 rounded-full' src="https://img.freepik.com/free-vector/nature-deer-illustration-logo-design_343694-2606.jpg?w=826&t=st=1680348268~exp=1680348868~hmac=c33151dce0fe556c870edad1036c855e9fca22e1c44e538b1e2350b0ca35077c" />
            </div>

        </div>
    );
};

export default Header;