
import { useState } from 'react';
import { contactData } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container-custom">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-darkBlue">Let's Connect</h3>
            <p className="text-portfolio-darkBlue/80">
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center">
                  <Mail size={18} className="text-portfolio-blue" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Email</p>
                  <a 
                    href={`mailto:${contactData.email}`} 
                    className="text-portfolio-darkBlue hover:text-portfolio-blue"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center">
                  <Phone size={18} className="text-portfolio-blue" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Phone</p>
                  <a 
                    href={`tel:${contactData.phone}`} 
                    className="text-portfolio-darkBlue hover:text-portfolio-blue"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center">
                  <MapPin size={18} className="text-portfolio-blue" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Location</p>
                  <p className="text-portfolio-darkBlue">{contactData.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a 
                href={contactData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={contactData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={contactData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <Card className="lg:col-span-3 border-none shadow-md">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-portfolio-darkBlue">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-portfolio-blue/20 focus:border-portfolio-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-portfolio-darkBlue">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-portfolio-blue/20 focus:border-portfolio-blue"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-portfolio-darkBlue">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-portfolio-blue/20 focus:border-portfolio-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-portfolio-darkBlue">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 border-portfolio-blue/20 focus:border-portfolio-blue"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
