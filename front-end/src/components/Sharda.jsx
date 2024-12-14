import React from 'react'
import { useForm } from "react-hook-form";
import Confirm from '../components/Confirm';

function Sharda() {
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
        <dialog id="img2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Sharda</h3>
            <div>
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div>
                  <div className="carousel-item">
                    <img src="kumbhalkar3.jpg" className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src="kumbhalkar1.jpg" className="rounded-box pt-3" />
                  </div>
                  <div className="carousel-item">
                    <img src="kumbhalkar2.jpg" className="rounded-box pt-3" />
                  </div>
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

export default Sharda
