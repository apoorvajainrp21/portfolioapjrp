
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="bg-black">
      <div className="container-custom">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
