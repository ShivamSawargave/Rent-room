import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Confirm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {

      fullname: data.fullname,
      mobilenumber: data.mobilenumber,
      email: data.email,
      password: data.password,
      roomaddress: data.roomaddress
    }

    await axios.post(`${BACKEND_URL}/customer/confirm`, userInfo).then((res) => {
      console.log(res.data)
      if (res.data) {
        toast.success('Confirm Successfully');
        document.getElementById("confirmation").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.customer));
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
    <div>
      <dialog id="confirmation" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Confirmation Form</h3>
          {/*fullname*/}
          <div className='mt-4 space-y-2'>
            <span>Fullname</span>
            <br />
            <input type="text" placeholder='Enter your Fullname' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })} />
            <br />
            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/*Mobilenumber*/}
          <div className='mt-4 space-y-2'>
            <span>Mobile Number</span>
            <br />
            <input type="number" placeholder='Enter your Mobile Number' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("mobilenumber", { required: true })} />
            <br />
            {errors.mobilenumber && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/*email*/}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/*password*/}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input  {...register("password", { required: true })} type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
            <br />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/*name*/}
          <div className='mt-4 space-y-2'>
            <span>Room Address</span>
            <br />
            <input type="address" placeholder='Enter Room Address' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("roomaddress", { required: true })} />
            <br />
            {errors.roomaddress && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/*button */}
          <form id="con" onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' >Confirm</button>

            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Confirm;
