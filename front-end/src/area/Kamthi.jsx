import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Tuljai from '../components/Tuljai';
import Sharda from '../components/Sharda';
import Sawargave from '../components/Sawargave';


function Kamthi() {
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
                    <div className='ml-8 text-2xl m-6 p-6 font-bold'>Kamthi</div>
                    <Slider {...settings}>

                        <div className='mt-4 mb-4 my-3 hover:scale-105 duration-200 image-full'>
                            <div className="card w-92 md:h-100 md:w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_b-YTwImwx9xjkL6YE5MMK1rxqNgkC1_7Q&s" alt="Shoes" /></figure>
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
                                <figure><img src="https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg" alt="Shoes" /></figure>
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
                                <figure><img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.720.suffix/1689786863909.jpeg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Sawargave
                                        <div className="badge badge-success">New</div>
                                    </h2>
                                    <p><b>Address:- </b></p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">price</div>
                                        <div className="">
                                            <a className="  p-2 text-blue-500 underline duration-300" onClick={() => document.getElementById("img3").showModal()}>See More Photos</a>
                                            <Sawargave />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 my-3 hover:scale-105 duration-200'>
                            <div className="card w-92 md:w-96 h-100 bg-base-100 shadow-xl">
                                <figure><img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.720.suffix/1689786863909.jpeg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        house name
                                        <div className="badge badge-success">New</div>
                                    </h2>
                                    <p><b>Address:-</b></p>
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
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6RTk_ByAWohZgKWWqMH_AzW679QTiSIvYQ&s" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        house name
                                        <div className="badge badge-success">New</div>
                                    </h2>
                                    <p><b>Address:-</b></p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">price</div>
                                        <div className=" p-2 text-blue-500 underline duration-300">Buy now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 my-3 hover:scale-105 duration-200'>
                            <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6RTk_ByAWohZgKWWqMH_AzW679QTiSIvYQ&s" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        house name
                                        <div className="badge badge-success">New</div>
                                    </h2>
                                    <p><b>Address:-</b></p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">price</div>
                                        <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 my-3 hover:scale-105 duration-200'>
                            <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://knockoffdecor.com/wp-content/uploads/Master-Bedroom-Guide.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        house name
                                        <div className="badge badge-success">New</div>
                                    </h2>
                                    <p><b>Address:-</b></p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">price</div>
                                        <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 my-3 hover:scale-105 duration-200'>
                            <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://knockoffdecor.com/wp-content/uploads/Master-Bedroom-Guide.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        house name
                                        <div className="badge badge-success">New</div>
                                    </h2>
                                    <p><b>Address:-</b></p>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">price</div>
                                        <div className=" p-2 text-blue-500 underline duration-300">See More Photos</div>
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

export default Kamthi
