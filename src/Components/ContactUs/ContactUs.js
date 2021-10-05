import React from 'react';
import Iframe from '@trendmicro/react-iframe';
import './ContactUs.css';
import FormPart from '../FormPart/FormPart';


const ContactUs = () => {
    return (
        <div>
            <FormPart></FormPart>
            <div id="map-design">
                <div class="container">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14475.232313030407!2d91.85235586977541!3d24.90452730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1626020059971!5m2!1sen!2sbd" width="100%" height={440} />
                </div>
            </div>

        </div>
    );
};

export default ContactUs;