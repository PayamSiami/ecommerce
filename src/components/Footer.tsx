
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>1402 کلیه حقوق این سایت محفوظ می‌باشد</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer