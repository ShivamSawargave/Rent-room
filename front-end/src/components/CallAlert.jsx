import React from 'react'
import Navbar from './Navbar'

function CallAlert() {
    return (
        <>
            <Navbar />
            <div className='pt-10'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium"></div>
                    <div className="collapse-content">
                        <p></p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">I do not want any calls from the sales department. What should I do?</div>
                    <div className="collapse-content">
                        <p>In case you do not want to receive any more calls from the sales team, write to us at <b className='underline'>support@sssrentroom.com</b>. Your privacy is of utmost importance to us at SSS RENT ROOM.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Why am I not receiving any SMS alerts for responses on my Property?</div>
                    <div className="collapse-content">
                        <p>We usually notify our users if our servers are down or in case of any technical issue that could impact the flow of SMS alerts.

                            However, if you haven’t received any such notification from us, then it could be an issue with your network provider. Request you to discuss the issue with your mobile network provider as soon as possible.

                            Meanwhile, you can continue to receive the messages through your registered Email ID.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CallAlert