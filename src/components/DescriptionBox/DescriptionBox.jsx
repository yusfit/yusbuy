import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.</p>
        <p>
        Electronic commerce, or e-commerce, is the buying and selling of goods and services over the internet. E-commerce can be conducted on computers, tablets, smartphones, and other smart devices. Nearly every imaginable product and service is now available through e-commerce, and it has upended how many companies and entire industries do business.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
