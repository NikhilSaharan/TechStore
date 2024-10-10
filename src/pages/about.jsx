/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import a6 from '../assets/images/about/a6.jpg'



import mobileImage from '../assets/images/mobileimage.jpg'
const about = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>about us</b></h1>
          <p className="card-text mb-3">Maisha Infotech has been helping companies across the World with managing IT through our unique method of managing technology and consulting solutions. Give users the right access rights and views to issues, requests and changes contracts assets, solutions and reports, with our expert experts.</p>
          <p className="card-text">As one of largest IT service providers, we have a deep pool of IT engineers and certified personnel are on hand to assist you ensure your IT business is secure and make sure you have high uptime.</p>
        </div>
      </div>
    </section>

   

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>What our customers say...</h1>
            <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Phillip Omosh</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  </>;
}

export default about