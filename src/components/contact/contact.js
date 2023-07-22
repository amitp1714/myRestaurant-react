import React from 'react'
const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-12'>
            <div className="border border-3 border-dark bg-dark">
              <div className="container">
                <div className="row">
                  <div className='col-md-12 p-4 m-2'>
                    <div className="border border-3 border-warning bg-black">
                      <div className="shadow-lg p-3 mb-3 bg-body rounded">
                        <h2 className="text-center text-warning">CONTACT US</h2>
                      </div>
                      <div class="container overflow-hidden">
                        <div class="row gy-5">
                          <div class="col-6">
                            <div class="p-3 mb-3 border bg-light">
                              <h5>TIMING</h5>
                              <h6>BREAKFAST:</h6>
                              <p>Monday-Sunday: <i>7am-8:30am</i></p>
                              <h6>LUNCH:</h6>
                              <p>Monday-Sunday: <i>12:30pm-2:00pm</i></p>
                              <h6>DINNER:</h6>
                              <p>Monday-Friday: <i>5:00pm-9:00pm</i></p>
                              <p>Saturday: <i>4:00pm-9:00pm</i></p>
                              <p>Sunday: <i>4:00pm-9:00pm</i></p>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="p-3 mb-3 border bg-light">
                            <h5>CONTACT</h5>
                            <p>Shop.No: 213</p>
                            <p>14th Avenue, Gaur City-2</p>
                            <p>Noida Uttar Pradesh </p>
                            <p>201009</p>
                            <h5>For Enquiry:</h5>
                            <p>Phone: +91 9876543210</p>
                            <p>E-mail: zaykarestaurant@gmail.com</p>
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
    </>
  );
}
export default Contact;