import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillPhone} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Coffee for Soul</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        
      </p>
      <p>Business Address: 76 Le Binh, Ward 4, Tan Binh</p>
      <p className="icons">
       <AiFillPhone />+ 84 0338934743
      </p>
    </div>
  )
}

export default Footer