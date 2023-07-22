import React from 'react'
const Booking = () => {
    return (
        <>
            <div className="container">
                <h5 className="title text-dark text-center">YOUR CONTACT INFORMATION</h5>
                <div className="row">
                    <div className='col-md-12 pt-4 mt-4'>
                        <form className="row g-3 text-dark text-start">
                            <div className="col-md-12">
                                <label for="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name " />
                            </div>
                            <div className="col-md-12">
                                <label for="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name " />
                            </div>
                            <div className="col-md-12">
                                <label for="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="email@gmail.com" />
                            </div>
                            <div className="col-md-12">
                                <label for="inputPhone" className="form-label">Contact No:</label>
                                <input type="number" className="form-control" id="inputPhone" placeholder="Enter Contact no " />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Ask me </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='type here'></textarea>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-success" type="submit">Submit</button>
                                <button className="btn btn-secondary ms-4" type="button" data-bs-dismiss="modal">Close</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Booking;
