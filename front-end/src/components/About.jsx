import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
            <Navbar />

            <div className=' pt-24'>
                <div className='md:pl-96 md:text-2xl pl-40 font-bold'>OUR DREAM</div>
                <div className='block md:pl-80 pl-32 text-3xl md:text-8xl font-bold'><div>Easy living</div>
                    <div> for everyone</div>
                </div>
                <div className='pl-4 md:pl-20'>
                <div className='text-xl pt-2 md:pt-4 md:text-2xl'>SIMPLE</div>
                <div className='text-normal  md:text-xl'>we want to make finding homes accessible and simple.</div>
                <div className='text-xl pt-2 md:pt-4 md:text-2xl'>EQUITABLE</div>
                <div className='text-normal md:text-xl'>We want to address the issues of young migrants who are discriminated against for various reasons. </div>
                <div className='text-xl pt-2 md:pt-4 md:text-2xl'>ACCESIBLE</div>
                <div className='text-normal md:text-xl'>We want to make housing affordable and cater to individual needs, which greatly vary depending on personality. We wanted to remove the middle-man the broker, who often becomes a decider of where you will stay rather than cater to your taste.</div>
                </div>
            </div>
            <div className=" pt-4 md:pt-8  max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <h1 className='items-center justify-center text-center text-semibold text-2xl font-bold md:text-4xl'>Welcome TO SSS Rent Room</h1>
                <p className='mt-6 text-xl'>
                    Welcome to SSS Rent Room! We offer perfect partnership! Whether you are a
                    customer searching for the perfect room on rent or owner whose room we
                    manage and rent to customer, our team will work hard for you every day to
                    get you room easily without any wandering and from your home. We specialize
                    in renting the right room for the right customer every time! our customer
                    experience living like a local and enjoy the experiences while staying in
                    comfirtable room with great amenities. We continually strive the exceed
                    owner and customer expectation by providing other facilities attention.
                    Enjoy our services for you.
                </p>

            </div>
            <div className='items-center justify-center p-4 text-center'>
                <Link to="/">
                    <button className='px-4 py-2  bg-yellow-700 text-white rounded-md hover:bg-yellow-900 duration-300 mt-6 md:mb-10'>Back</button>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default About
