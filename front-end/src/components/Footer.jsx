import React from 'react'

function Footer() {
  return (
    <>
      <hr />
      <div className=' bg-slate-800 text-white'>
        <footer className="footer bg-neutral text-neutral-content grid-cols-3 md:grid-rows-2 p-10">
          <nav>
            <h6 className="footer-title text-white font-bold">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white font-bold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white font-bold">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white font-bold">Social</h6>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Github</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white font-bold">Explore</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Security</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white font-bold">Apps</h6>
            <a className="link link-hover">Mac</a>
            <a className="link link-hover">Windows</a>
            <a className="link link-hover">iPhone</a>
            <a className="link link-hover">Android</a>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Footer
