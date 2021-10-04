import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <div>
            <h2 className="text-center mt-5">Get in <span className="text-info">Touch</span></h2>
            <div className="form-container">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="Enter your message" />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button className='' variant="info" type="submit">Submit</Button>
                    </div>

                </Form>
            </div>

        </div>
    );
};

export default ContactUs;