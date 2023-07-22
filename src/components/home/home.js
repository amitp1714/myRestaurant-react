import React from 'react'
import Booking from '../booking/booking'
import mainimage from '../../assets/bghome.jpg'
import About from '../about/about'
import './home.css'
const Home = () => {
  return (
   <>
    <div className="container-fluid">
        <div className="row">
          <div className='col-md-12'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={mainimage} class="d-block w-100" alt="..." />
                  <div className="carousel-caption d-block text-light ">
                    <div className="caption ">
                      <h1 className="bg fw-bold fs-1"><span className="fletter fw-bolder fs-1 text-danger">Z</span>AYKA</h1>
                      <h1 className="bg fw-bold fs-1">RESTAURANT</h1>
                    </div>
                    <p className="bg">Zayka is leading vegetarian food chain that is famous for its exotic spices, delicate herbs, and fine dining experience.</p>
                    <div className="booking-slot">
                      <button type="button" className="booking-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        KNOW MORE
                      </button>
                      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content">
                            <div className="modal-body">
                              <Booking />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
            <About/>

    </>
  )
}
export default Home