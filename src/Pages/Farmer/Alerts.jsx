import React from 'react'
import Navbar from '../HomePageComponents/Navbar'
import LeftPanel from '../../LeftPanel'

function Alerts() {
    return (
        <>
            <Navbar />
            <div className="flex flex-row container relative h-screen">
                <LeftPanel />
            </div>
        </>
    )
}

export default Alerts