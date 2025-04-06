
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';
import { useState } from 'react';

const ContactForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Here you would typically make an API call to send the email
      // For demonstration, we'll simulate success after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a mailto link and click it to open the user's email client
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Message from: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      const mailtoLink = document.createElement('a');
      mailtoLink.href = `mailto:jainrp.apoorva@gmail.com?subject=${subject}&body=${body}`;
      mailtoLink.click();
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      // Reset success message after 3 seconds
      if (submitSuccess) {
        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    }
  };
  
  const inputStyles = theme === 'dark'
    ? 'bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400'
    : 'bg-white border-gray-300 text-black placeholder:text-gray-500';
  
  return (
    <div className="lg:col-span-3">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md ${inputStyles} focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label className={`block mb-1 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md ${inputStyles} focus:outline-none focus:ring-2 focus:ring-primary/50`}
              placeholder="Your email"
              required
            />
          </div>
        </div>
        
        <div>
          <label className={`block mb-1 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md ${inputStyles} focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="Message subject"
            required
          />
        </div>
        
        <div>
          <label className={`block mb-1 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-2 rounded-md ${inputStyles} focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="Your message"
            required
          />
        </div>
        
        {submitError && (
          <p className="text-red-500 text-sm">{submitError}</p>
        )}
        
        {submitSuccess && (
          <p className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            Message sent successfully!
          </p>
        )}
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-foreground text-background hover:bg-foreground/90"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
