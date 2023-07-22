import React from 'react'
const Eventbook = () => {
    return (
        <>
            <div className="container">
                <h5 className="title text-dark text-center">YOUR CONTACT INFORMATION</h5>
                <div className="row">
                    <div className='col-md-12 pt-4 mt-4'>
                        <form className="row g-3 text-dark text-start">
                            <div className="col-md-12">
                                <label for="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name " required />
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
                                <input type="number" className="form-control" id="inputPhone" placeholder="Enter Contact no " required />
                            </div>
                            <h5 className="text-dark text-center">YOUR EVENT DETAILS</h5>
                            <div className="col-md-12">
                                <label for="lastName" className="form-label">Nature of Event</label>
                                <input type="text" className="form-control" id="lastName" placeholder="e.g. Birthday Part, Business Dinner etc. " required />
                            </div>
                            <div className="col-md-6">
                                <label for="people" className="form-label">Number of Guest</label>
                                <input type="number" className="form-control" id="people" required />
                            </div>
                            <div className="col-md-12">
                                <label for="eventdate" className="form-label">Event Date</label>
                                <input type="date" className="form-control" id="eventdate" required />
                            </div><br />
                            <div className="col-md-6">
                                <label for="starttime" className="form-label">Start Time</label>
                                <input type="time" className="form-control" id="starttime" />
                            </div>
                            <div className="col-md-6">
                                <label for="endtime" className="form-label">End Time</label>
                                <input type="time" className="form-control" id="endtime" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Any additional information you would like to add? </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='type here'></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-danger" type="submit">Submit</button>
                                <button className="btn btn-secondary ms-4" type="button" data-bs-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Eventbook;