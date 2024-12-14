import React from 'react'
import Navbar from './Navbar'

function log_in() {
    return (
        <>
        <Navbar/>
        <div className='pt-10'>
        <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-2xl font-medium"></div>
                <div className="collapse-content">
                    <p></p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-2xl font-medium">Can I login using Facebook and Google?</div>
                <div className="collapse-content">
                    <p>No, you can log into SSS RENT ROOM using Google and SSS RENT ROOM</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">Receiving error that user is not found. What to do?</div>
                <div className="collapse-content">
                    <p>If you are getting this error while signing into your account.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-medium">I am trying to login but my account is Inactive. What should I do?</div>
                <div className="collapse-content">
                    <p>We would like to inform you that your account may have become Inactive because you haven’t probably logged in for a long time. If that’s the case, you have to resister to SSS RENT ROOM</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default log_in