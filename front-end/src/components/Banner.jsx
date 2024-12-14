import Contact from "../components/Contact";
import React, { useRef } from "react";
import Slider from "react-slick";
import Tuljai from "../components/Tuljai";
import Sharda from "../components/Sharda";
import Sawargave from "../components/Sawargave";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Banner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
    .post(`${BACKEND_URL}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <a href="https://chat.whatsapp.com/IoSiSJ1ZKBIAJTU1QI07wY">
        <svg
          className=" h-20 w-20 md:h-32 md:32 hover:scale-105  fixed bottom-0 pr-4 right-0 z-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path
            fill="#21823e"
            d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
          />
        </svg>
      </a>
      <div className="max-w-screen-2xl mt-20 container mx-auto md:px-20 px-6">
        <div className="pt-16 flex justify-center items-center text-3xl md:text-4xl font-bold">
          Helping You to search room on rent by without wandering
        </div>
        <div className="carousel w-full pt-20 max-h-screen">
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen"
                     style={{
                      backgroundImage: "url(https://cdn.create.vista.com/api/media/small/270287408/stock-photo-cardboard-house-wooden-cubes-rent-lettering-table)",
                  }}>
                       
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item relative w-full apect-w-96 ">
                    <div
                        className="hero max-h-screen"
                        style={{
                            backgroundImage: "url()",
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative md:w-full aspect-w-96">
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://media.istockphoto.com/id/1299298243/video/modern-living-room-with-grey-couch-and-industrial-design-shelves.jpg?s=640x640&k=20&c=gQdgjpZcdYrqnJc1TG5itfczLK3nPvmT2ekxrxNAdvg=)",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url()",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

      </div>
      <div className="">
        <div className="text-white text-2xl flex justify-center items-center pt-6 pb-6">
          Benifit of SSS Rent Room
        </div>
        <div className="flex items-center justify-evenly pb-14">
          <div className="h-20 w-20 text-sm">Avoid Brocker</div>
          <div className="h-20 w-20 text-sm">Connect directly to owner</div>
          <div className="h-20 w-20  text-sm">Shortlist without visit</div>
          <div className="h-20 w-20 text-sm">Save time and assets</div>
        </div>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl pt-14 md:text-4xl">
            Welcome to SSS rent room{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
        </div>
        <div>
          <div className="ml-8 text-2xl m-6 p-6 text-bold">
            Khapri + Chinchbhavan + palhoti
          </div>
          <Slider {...settings}>
            <div className="mt-4 mb-4 my-3 hover:scale-105 duration-200 image-full">
              <div className="card w-92 md:h-100 md:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_b-YTwImwx9xjkL6YE5MMK1rxqNgkC1_7Q&s"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Tuljai
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:- </b>Near shive elite building, new
                    khapri,nagpur Maharashtra, 441108
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">3500 rupies</div>
                    <div className="">
                      <a
                        className="  p-2 text-blue-500 underline duration-300"
                        onClick={() =>
                          document.getElementById("img").showModal()
                        }
                      >
                        See More Photos
                      </a>
                      <Tuljai />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:w-96 md:h-100 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://media.designcafe.com/wp-content/uploads/2023/07/05141750/aesthetic-room-decor.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Sharda
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:- </b>plot 294, 295 khapri, rehabilitation area,
                    wardha road, nagpur, Maharashtra,441108
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">5400 rupies</div>
                    <div className="">
                      <a
                        className="  p-2 text-blue-500 underline duration-300"
                        onClick={() =>
                          document.getElementById("img2").showModal()
                        }
                      >
                        See More Photos
                      </a>
                      <Sharda />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:h-100 md:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.720.suffix/1689786863909.jpeg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Sawargave
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:- </b>
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">price</div>
                    <div className="">
                      <a
                        className="  p-2 text-blue-500 underline duration-300"
                        onClick={() =>
                          document.getElementById("img3").showModal()
                        }
                      >
                        See More Photos
                      </a>
                      <Sawargave />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:w-96 h-100 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.720.suffix/1689786863909.jpeg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Wankhede
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:-</b>
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">price</div>
                    <div className="">
                      <a
                        className="  p-2 text-blue-500 underline duration-300"
                        onClick={() =>
                          document.getElementById("img").showModal()
                        }
                      >
                        See More Photos
                      </a>
                      <Sawargave />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6RTk_ByAWohZgKWWqMH_AzW679QTiSIvYQ&s"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Matoshree
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:-</b>
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">price</div>
                    <div className=" p-2 text-blue-500 underline duration-300">
                      See More Photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6RTk_ByAWohZgKWWqMH_AzW679QTiSIvYQ&s"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Devgiri
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:-</b>
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">price</div>
                    <div className=" p-2 text-blue-500 underline duration-300">
                      See More Photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://knockoffdecor.com/wp-content/uploads/Master-Bedroom-Guide.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Ruknai
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:-</b>
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">price</div>
                    <div className=" p-2 text-blue-500 underline duration-300">
                      See More Photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 my-3 hover:scale-105 duration-200">
              <div className="card w-92 md:w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://knockoffdecor.com/wp-content/uploads/Master-Bedroom-Guide.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    dhondiba Nivas
                    <div className="badge badge-success">New</div>
                  </h2>
                  <p>
                    <b>Address:-</b>
                  </p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">price</div>
                    <div className=" p-2 text-blue-500 underline duration-300">
                      See More Photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className=" md:flex justify-between md:justify-around md:pt-16">
        <div className="md:text-4xl text-2xl pl-4 md:pl-10 pt-8 md:pt-8  md:h-60 md:w-60">
          Be part of our ever growing family
        </div>
        <div className="pl-14 md:pl-20 flex justify-between items-center pr-20 pt-3  md:pr-40 pb-6">
          <div className="">
            <img
              src="looking.jpg"
              alt=""
              className="h-24 w-24 rounded-md md:h-40 md:w-40 md:mr-32"
            />
            <div className="md:h-40 md:w-40 h-24 w-24">
              <span className="">Looking for a room?</span>
              <a href="/Room" className="text-blue-500">
                SEARCH ROOM
              </a>
            </div>
          </div>
          <div className="">
            <img
              src="owner.jpg"
              alt=""
              className="h-24 w-24 rounded-md md:ml-32 md:h-40 md:w-40"
            />
            <div className="md:h-40 md:w-48 h-24 w-24 md:ml-32">
              <span className="">Are you room owner?</span>
              <Link
                to="/Rent"
                className="underline text-blue-500 cursor-pointer"
              >
                RENT YOUR ROOM
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 p-6 flex items-center justify-center">
        <button className="flex items-center justify-center p-2 rounded-md text-white hover:bg-yellow-900 bg-yellow-700">
          <a href="/Contact">Contact Us</a>
        </button>
      </div>

      <div className="flex bg-slate-500 p-4 md:p-16 items-center text-white justify-around underline">
        <div>
          <ul>
            <li>
              <a href="/Khapri">Khapri</a>
            </li>
            <li>
              <a href="/Chinchbhavan">Chinchbhavan</a>
            </li>
            <li>
              <a href="/Manishnagar">Manishnagar</a>
            </li>
            <li>
              <a href="/Palhoti">Palhoti</a>
            </li>
            <li>
              <a href="/Butibori">Butibori</a>
            </li>
            <li>
              <a href="/Jamtha">Jamtha</a>
            </li>
            <li>
              <a href="/Chhatrapati">Chhatrapati</a>
            </li>
            <li>
              <a href="/Jayprakash">Jayprakashnagar</a>
            </li>
            <li>
              <a href="/Rameshwari">Rameshwari</a>
            </li>
            <li>
              <a href="/Pratapnagar">Pratapnagar</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/Ganeshpeth">Ganeshpeth</a>
            </li>
            <li>
              <a href="/Nandanvan">Nandanvan</a>
            </li>
            <li>
              <a href="/Kharbi">Kharbi</a>
            </li>
            <li>
              <a href="/Dighori">Dighori</a>
            </li>
            <li>
              <a href="/Itwari">Itwari</a>
            </li>
            <li>
              <a href="/Telangkhedi">Telangkhedi</a>
            </li>
            <li>
              <a href="/Ravinagar">Ravinagar</a>
            </li>
            <li>
              <a href="/Panjara">Panjara</a>
            </li>
            <li>
              <a href="/Congress">Congressnagar</a>
            </li>
            <li>
              <a href="/Khaperkheda">Khaperkheda</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/Chandkapur">Chandkapur</a>
            </li>
            <li>
              <a href="/Bhanegaon">Bhanegaon</a>
            </li>
            <li>
              <a href="/Dahegaon">Dahegaon</a>
            </li>
            <li>
              <a href="/Wakodi">Wakodi</a>
            </li>
            <li>
              <a href="/Kamthi">Kamthi</a>
            </li>
            <li>
              <a href="/Parshivani">Parshivani</a>
            </li>
            <li>
              <a href="/Mansar">Mansar</a>
            </li>
            <li>
              <a href="/Sitabardi">Sitabardi</a>
            </li>
            <li>
              <a href="Takli">Takli</a>
            </li>
            <li>
              <a href="Wadi">Wadi</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner;
