import React, { useState } from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'
import addToMailchimp from 'gatsby-plugin-mailchimp'



const EmailSubscribe = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(email);
        alert(result.msg);
      }


    return (
        <Card style={{marginTop: 60}}>
        <CardBody>
            <CardTitle className="mb-3">
            Newsletter
            </CardTitle>
            <Form className="text-center" onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                type="email"
                name="email"
                placeholder="Your email address.."
                onChange={e => setEmail(e.target.value)}
                />
            </FormGroup>
            <button className="btn btn-outline-success">
                Subscribe
            </button>
            </Form>
        </CardBody>
        </Card>
    )
}

export default EmailSubscribe
