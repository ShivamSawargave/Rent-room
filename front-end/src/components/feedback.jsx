import React from 'react'

function feedback() {

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm()

const onSubmit = async (data) => {
    const userInfo = {

        firstname: data.firstname,
        lastname:data.lastname,
        Message: data.Message

    }
    await axios.post("http://localhost:4001/contactus/contact", userInfo).then((res) => {
        console.log(res.data)
        if (res.data) {
            toast.success('Thanku for your valuable feedback');
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
      </div>
      </div>
    </>
  )
}

export default feedback
