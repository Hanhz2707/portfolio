import React from 'react';
import {BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
              <div>
            <a href='https://www.facebook.com/profile.php?id=100008323577440' target='_blank'>
              <div>
                <BsFacebook />
              </div>
            </a>
        </div>

        <div>
            <a href='https://www.linkedin.com/in/huy-anh-pham-890b63226/' target='_blank'>
              <div>
                <BsLinkedin />
              </div>
            </a>
        </div>

        <div>
            <a href='https://github.com/Hanhz2707' target='_blank'>
              <div>
                <BsGithub />
              </div>
            </a>
        </div>
    </div>
  );
};

export default SocialMedia;