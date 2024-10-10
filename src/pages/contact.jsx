/* eslint-disable no-unused-vars */
import React from 'react'

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
           
        </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
        
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contact Us</b></h2>
                  <p className='mb-2'><b>Address:</b>  Office No 710, 7th Floor, SSR Corporate Park, Sector 27B, opp. NHPC Metro Station, Ekta Nagar, Faridabad, Haryana 121003</p>
                  <p className='mb-2'><b>Phone:</b>  <a className='footer-tel' href="">Call us at 011 4254 7810</a></p>
                  <p className='mb-4'><b>Hours:</b>  From 10 a.m To 7 p.m</p>
                  <p>Maisha Infotech is committed to delivering cutting-edge software solutions that empower businesses to thrive in the digital era.</p>
                  <p> As a leading software development company, we specialize in creating innovative and scalable software applications tailored to meet the unique needs of our clients.</p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div className="contact-message p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>Leave Us A message</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='col-12 text-center gap-2'>
                <button id='button-link' type="submit">Submit</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact