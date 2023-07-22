import React from 'react'
import './card.css'
function Card({ menuData }) {
    return (
      <>
        <div className='maincard-container'>
            {menuData.map((curElem) => {
                return (
                  <>
                    <div className="cards" key={curElem.id}>
                        <div className="card-body">
                          <div className="menuimages">
                            <img src={curElem.image} className="" alt="not found" />
                          </div>
                            <h5 className="card-title">{curElem.catergory}</h5>
                            <p className="card-text">{curElem.name}</p>
                            <div className='cardfoot'>
                            <p className="price">{curElem.price}</p>
                            <button>Order</button>
                            </div>
                            
                        </div>
                    </div>
                  </>
                )
                })}
        </div>
     </>
    )
}
export default Card
