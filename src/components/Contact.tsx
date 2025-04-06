
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { useTheme } from 'next-themes';

const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="contact" 
      className="bg-background px-[7px] md:px-[15px]"
      data-theme={theme}
    >
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
