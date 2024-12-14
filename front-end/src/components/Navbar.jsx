import { useEffect } from 'react';
import { useState } from 'react';
import Login from '../components/Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
    const [authUser, setAuthUser] = useAuth()


    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const navItems = (
        <>
            <li><a href="/" className='text-black md:text-white'>HOME</a></li>
            <li><a href="/Room" className='text-black md:text-white'>ROOMS</a></li>
            <li><a href='/About' className='text-black md:text-white'>ABOUT</a></li>
            <li><a href='/Contact' className='text-black md:text-white'>CONTACT US</a></li>
            <li><a href='/Help' className='text-black md:text-white'>HELP</a></li>
        </>
    )
    return (
        <>
            <div className={`bg-slate-900 text-white w-full  mx-auto md:px-20  h-20 fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky.Navbar shadow-md bg-base-200 dutation-300 transition-all ease-in-out" : ""
                }`}>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>

                        <a className="font-bold text-sm cursor-pointer flex justify-between" href='/'>
                            <div><img src="logo.jpg" alt="" className='h-14 w-14 mt-1' /></div>
                            <div className='ml-2'>
                                <h2>SSS</h2>
                                <h2>RENT</h2>
                                <h2>ROOM</h2>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-end space-x-3">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>

                        {
                            authUser ? (<Logout />) : (
                                <div className="">
                                    <a className="text-white bg-orange-900 p-2 rounded-md hover:bg-slate-800 duration-300" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                                    <Login />
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
