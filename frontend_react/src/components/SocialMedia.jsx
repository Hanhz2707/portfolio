import React from 'react';
import {BsTwitter, BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  );
};

export default SocialMedia;