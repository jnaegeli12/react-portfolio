import React from 'react';
import Row from '../components/Row';
import Container from '../components/Container';
import ContactIntro from '../components/ContactIntro';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="container padding">
      <Row>
        <ContactIntro />
      </Row>
      <Container>
          <ContactForm />
      </Container>
    </div>
  )
}

export default Contact;