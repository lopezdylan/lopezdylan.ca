import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <BsGithub />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <HiOutlineMail />
        </div>
    </div>
);

export default SocialMedia;