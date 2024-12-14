import React from 'react'
import Navbar from './Navbar'

function Resistration() {
    return (
        <>
            <Navbar />
            <div className="join join-vertical w-full pt-10">
            <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-2xl font-medium"></div>
                    <div className="collapse-content">
                        <p></p>
                        
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-2xl font-medium">Is registration on SSS RENT ROOM FREE? Where to register?</div>
                    <div className="collapse-content">
                        <p>Yes! Registration on SSS RENT ROOM is completely FREE.</p>
                        <p className='pb-3'>Go to the 'Sign Up' link on the bottom right of the login page.</p>
                        <img src="signup.jpg" alt="" />
                        <p className='pt-16'>To resister on SSS RENT ROOM, <a href='Signup'><b className='underline'>Click here</b></a></p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-2xl font-medium">What are the benefits of selling/renting Property on SSS RENT ROOM?</div>
                    <div className="collapse-content">
                        <p>Once you register on Magicbricks, you can enjoy a suite of benefits. Few of these are mentioned below:</p>
                        <b className='underline'>Post property & connect with Buyers</b>
                        <ol>
                            <li>Post one property for FREE</li>
                            <li>Showcase your property to over 15 lakh+ buyers</li>
                            <li>Get instant responses via Email & SMS</li>
                            <li>Track responses & contact buyers/tenants instantly</li>
                            <li>Chat with buyers without exposing your contact details</li>
                        </ol>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-2xl font-medium">Do I need any documents to register as a Property Owner?</div>
                    <div className="collapse-content">
                        <p>No, you do not need any documents to register on SSS RENT ROOM but some basic details of yours and your Property are required.</p>
                        <p>Registration on SSS RENT ROOM is as easy and quick as it can get.</p>
                        <p className=''><a href='Signup'><b className='underline'>Click here </b></a>to resister now.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-2xl font-medium">I got an error message that says my Email ID is already registered with SSS RENT ROOM and that I must use another Email ID. How do I login now?</div>
                    <div className="collapse-content">
                        <p className='pb-2'>You can either create a new profile using a different Email ID or you can login with the same Email address by resistered your password. </p>
                        <img src="login.jpg" alt="" />
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default Resistration