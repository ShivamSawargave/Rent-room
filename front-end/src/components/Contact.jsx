import React from 'react'
import Navbar from '../components/Navbar'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Example() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {

            firstname: data.firstname,
            lastname: data.lastname,
            phonenumber: data.phonenumber,
            email: data.email,
            Message: data.Message

        }
        await axios.post("http://localhost:4001/contactus/contact", userInfo).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('Contact you soon');
                document.getElementById("contactuser").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.contactus));
                }, 2000)

            }

        }).catch((err) => {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
                setTimeout(() => { }, 3000)
            }
        })
    }

    return (
        <>
            <Navbar />
            
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8" id="contactuser">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">

                    </p>
                </div>
                <div method="dialog" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input {...register("firstname", { required: true })}
                                    type="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <br />
                                {errors.firstname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input {...register("lastname", { required: true })}
                                    type="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <br />
                                {errors.lastname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input {...register("email", { required: true })}
                                    type="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">

                                <input {...register("phonenumber", { required: true })}
                                    type="Number" className="block w-full rounded-md border-0 px-3.5 md:pl-24 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <br />
                                {errors.phonenumber && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </div>
                            <div className="mt-2.5">
                                <textarea {...register("Message", { required: true })}
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}