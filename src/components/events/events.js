import React from 'react'
import Eventbook from '../eventbook/eventbook'
import eventimage1 from '../../assets/e1.jpg'
import eventimage2 from '../../assets/e2.jpg'
import eventimage3 from '../../assets/e4.jpg'
import bgevent from '../../assets/aboutbg1.jpg'
const Events = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-12'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={bgevent} className="d-block w-100" alt="..." />
                  <div className="carousel-caption text-light ">
                    <div className="caption ">
                      <h1 className="bg">PRIVATE EVENTS</h1>
                    </div>
                    <p className="bg">We are pleased to offer a variety of private dining rooms at The Zayka for you to host your next business meeting or special event.  Please use the "Plan Your Event" button below to contact us for private events and private room availability.</p>
                    <div className="booking-slot">
                      <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        PLAN YOUR EVENT
                      </button>
                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                          <div className="modal-content">
                            <div className="modal-body">
                              <Eventbook />
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
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-12'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={eventimage1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={eventimage2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={eventimage3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
export default Events;