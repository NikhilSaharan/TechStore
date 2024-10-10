
import React from 'react'

import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'

import {  BsGithub } from 'react-icons/bs'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contact</b></h2>
          <div className='mb-3'><p><b>Address:</b> Office No 710, 7th Floor, SSR Corporate Park, Sector 27B, opp. NHPC Metro Station, Ekta Nagar, Faridabad, Haryana 121003</p> </div>
          <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href=""> Call us at 011 4254 7810</a></p> </div>
          <div className='mb-4'><p><b>Hours:</b>  From 10 a.m To 7 p.m</p> </div>
          <div className='mb-3'><p><b>Follow the developer</b></p> </div>
          <div className="socials d-flex gap-3">
        
          <Link to='https://twitter.com/maishainfotech' id='footer-link' target='_blank' className='gap-3'>
          <BsTwitter />
          </Link>
          <Link to={'https://github.com/NikhilSaharan'} className='gap-3' id='footer-link'>
          <BsGithub />
          </Link>
        
        
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>About</b></h2>
          <div className='mb-3'> <Link to='/about' id='footer-links'>About Us</Link>  </div>
          <div className='mb-3'> <Link to='checkout' id='footer-links'>Delivery</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Privacy Policy</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div>
         
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Account</b></h2>
          <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div>
          <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link>  </div>
          
          <div className='mb-3'> <Link id='footer-links'>My Wishlist</Link>  </div>
      
        </div>
       
      </div>
      <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-6">
        <p className="text-center text-md-start">&copy;Developed by Maisha Infotech 2024</p>
        </div>
        <div className="col-12 col-md-6">
        <ul className="list-inline text-center text-md-end">
          <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Contact Us</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer