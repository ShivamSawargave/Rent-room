import React from 'react'
import { useForm } from "react-hook-form";
import Confirm from '../components/Confirm';

function Sawargave() {
  const {

    formState: { },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }



  }
  return (
    <>
      <div>
        <dialog id="img3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Sawargave</h3>
            <div>
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                </div>
              </div>
              <div className="mt-6">
                <a className="underline text-blue-500 rounded-md  duration-300" onClick={() => document.getElementById("confirmation").showModal()}>Confirmation</a>
                <Confirm />
              </div>
            </div>

          </div>
        </dialog>
      </div>
    </>
  )
}

export default Sawargave
