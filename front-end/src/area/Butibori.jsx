import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Tuljai from '../components/Tuljai';
import Sharda from '../components/Sharda';
import Sawargave from '../components/Sawargave';


function Butibori() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <>
                    
        
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className=" items-center justify-center text-center">
                <h1 className="text-2xl pt-14 md:text-4xl">Welcome to SSS rent room <span className='text-pink-400'>here! :)</span></h1>

                <Link to="/">
                    <button className='px-4 py-2  bg-yellow-700 text-white rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
                </Link>
            </div>
            <div>
                <div className=' text-2xl m-2 font-bold'>Butibori</div>
                <Slider {...settings}>

                <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://media-cdn.tripadvisor.com/media/photo-s/06/8c/27/40/hotel-jain.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    house name
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b></p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">price</div>
                                    <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZb3fv6NQVqDZ_QnXmqUTEfPALJEF4GKeung&s" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    house name
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b></p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">price</div>
                                    <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:w-96 h-100 bg-base-100 shadow-xl">
                            <figure><img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Normal_room_in_Beijing_Hotel_%2820150822151912%29.JPG" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    house name
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b></p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">price</div>
                                    <div className="">
                                        <a className="  p-2 text-blue-500 underline duration-300" onClick={() => document.getElementById("img").showModal()}>See More Photos</a>
                                        <Sawargave />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/mbr-1657190156-S8bl9/01-29-1-1664286925-iML7J.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    house Name
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b></p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">price</div>
                                    <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.redd.it/6gaa1du56tl31.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    house name
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b></p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">price</div>
                                    <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4 my-3 hover:scale-105 duration-200 image-full'>
                        <div className="card w-92 md:h-100 md:w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://media-cdn.tripadvisor.com/media/photo-s/07/4e/d5/8b/saranga-holiday-inn.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Tuljai
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b>Near shive elite building, new khapri,nagpur Maharashtra, 441108</p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">3500 rupies</div>
                                    <div className="">
                                        <a className="  p-2 text-blue-500 underline duration-300" onClick={() => document.getElementById("img").showModal()}>See More Photos</a>
                                        <Tuljai />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:w-96 md:h-100 bg-base-100 shadow-xl">
                            <figure><img src="https://www.omganeshnaikcliffside.com/images/rmclip_01.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Sharda
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b>plot 294, 295 khapri, rehabilitation area, wardha road, nagpur, Maharashtra,441108</p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">5400 rupies</div>
                                    <div className="">
                                        <a className="  p-2 text-blue-500 underline duration-300" onClick={() => document.getElementById("img2").showModal()}>See More Photos</a>
                                        <Sharda />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 my-3 hover:scale-105 duration-200'>
                        <div className="card w-92 md:h-100 md:w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.redd.it/tsc24mgwnxra1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Sawargave
                                    <div className="badge badge-success">New</div>
                                </h2>
                                <p><b>Address:- </b></p>
                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">$50</div>
                                    <div className="">
                                        <a className="  p-2 text-blue-500 underline duration-300" onClick={() => document.getElementById("img3").showModal()}>See More Photos</a>
                                        <Sawargave />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>

        </div>
        
    </>
  )
}

export default Butibori
