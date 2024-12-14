import React from 'react'
import Navbar from './Navbar'


function Help() {
  return (
    <>
      <Navbar />
      <section className="pt-32  text-slate-800 grid-rows-1 p-10">
        <nav className='p-6 flex flex-col'>
          <h3 className="text-2xl ">User profile</h3>
          <a href='Resistration' className="link link-hover underline">New Registration</a>
          <a href='Log_in' className="link link-hover underline">Login</a>
          <a href='CallAlert' className="link link-hover underline">Manage Calls/ Alerts</a>
          
        </nav>
        <nav className='p-6 flex flex-col'>
          <h3 className=" text-2xl ">Response Management</h3>
          <a href='Response' className="link link-hover underline">View Responses on Room Posted</a>
          <a href='Frauds' className="link link-hover underline">Protection from online frauds</a>
        </nav>
       
        
      
      </section>
      <div className='p-10'>
      <h3 className="text-2xl">Frequently Asked Question</h3>
          <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium"></div>
              <div className="collapse-content">
                <p className='p-2'></p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">How do i deactivate my account?</div>
              <div className="collapse-content">
                <p className='p-2'>
                  <div className='p-2'>To deactivate your account follow these steps:</div>
                  <div className='p-2'><b>Step 1:</b>Login your account to SSS Rent Room.</div>
                  <div className='p-2'><b>Step 2:</b>On the top banner, click on logout then your account will be deactivated</div>
                  <img className='p-2' src="logout.jpg" alt="" />
                  </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">How to pay rent bill?</div>
              <div className="collapse-content">
              <p className='p-2'>
                  <div className='p-2'>for paying rent bill, follow these steps:</div>
                  <div className='p-2'><b>Step 1:</b>fill confirmation form.</div>
                  <div className='p-2'><b>Step 2:</b>After filling the form, our team call you soon.but you dont pay your rent.</div>
                  <div className='p-2'><b>Step 3:</b>You pay your bill after getting room in hand of room owner.</div>
                  
                  </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}

export default Help