import React from 'react'
import Navbar from './Navbar'

function Frauds() {
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
                    <div className="collapse-title text-xl font-medium">How can I protect myself from QR code frauds?</div>
                    <div className="collapse-content">
                        <p>>Never use QR codes to receive money.</p>
                        <p>>You have to pay your money after getting room.</p>
                        <p>>You pay your money directly to the room owner, no middle man use</p>
                        <p>Note: Transactions like above are done outside our platform and we’ve no control over it. Therefore, it’s important that you protect yourself from such situations.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Frauds