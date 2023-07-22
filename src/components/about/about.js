import React from 'react'
import aboutbg from '../../assets/aboutbg1.jpg'
const About = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-12'>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={aboutbg} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-block text-light ">
                                        <div className="container-fluid">
                                            <div className="row justify-content-end ">
                                                <div className='col-md-12 bg-secondary'>
                                                    <h2 className='about'>ABOUT US</h2>
                                                    <p className='about text-md-start lh-base fs-5'>Zayka Restaurants showcase some of its signature innovations in gastronomy. For serving quality Indian pure vegetarian food at fair prices, we are counted among best restaurants in India. Zayka has spread its aroma in this industry over the past few decades. For serving delicious and lip smacking dishes, Shudh Restaurant has become first choice of foodies among other restaurants in Delhi. All the food on the Zayka's menu is cooked to order. To maintain quality and hygiene in food, finest ingredients are delivered to the restaurants daily. Being the best restaurant in Delhi, Zayka Restaurant is committed to provide excellent food, service, and an unforgettable dining experience for you and your family to enjoy for many years to come.</p>
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
export default About;