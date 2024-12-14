import React from 'react'
import Navbar from './Navbar'

function Response() {
    return (
        <>
            <Navbar />
            <div className='pt-10'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium"></div>
                    <div className="collapse-content">
                        <p></p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How can I view the responses on my property?</div>
                    <div className="collapse-content">
                        <p>>When users fill confirmation form then our team will contact you. </p>
                        <p>>If user want contact directly to room owner then i give your phone number to him/her.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">I am trying to contact a lead but their phone is not reachable. What should I do?</div>
                    <div className="collapse-content">
                        <p>It could be because the particular lead is probably out of his/her network coverage area. We suggest you try to contact them again later.</p>
                        <p>Also, make sure that you are using the correct STD code or make sure you dial the mobile number with ‘0’ at the start.</p>
                        <p>Alternatively, you can use SSS RENT ROOM Chat to connect with your leads. It’s easy and simple and you don’t have to worry about network issues. Just send a message to your lead and he/she will reply to it whenever they see it.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Received a response but the lead said he/she was looking for another Room. What should I do now?</div>
                    <div className="collapse-content">
                        <p>It happens sometimes that leads end up expressing interest in Room that are not suitable for them. While there’s nothing we can do about it, we assure you that we work hard to connect you only with genuine buyers. You’ll be pleased to know that all of our leads are mobile number verified.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Response