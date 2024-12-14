import React from 'react';
import Navbar from '../components/Navbar';
import Room from '../components/Room';
import Footer from '../components/Footer';
function Rooms() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
            <Room />
            </div>
            <Footer />
        </>
    )
}

export default Rooms;
