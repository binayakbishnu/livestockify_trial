import React from 'react'

function PageNotFound() {
    return (
        <div className='w-screeen h-screen font-bodyFont text-black font-bold flex justify-center items-center'>
            <div className='w-[40%] m-auto bg-navbarbackground rounded p-8'>
                The page you are looking for does not exist or the service is under development. Kindly contact the admin.
            </div>
        </div>
    )
}

export default PageNotFound