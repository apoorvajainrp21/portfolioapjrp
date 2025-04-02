
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { contactData } from '@/data/content';

const ContactInfo = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
      <p className="text-white/80">
        Feel free to reach out for collaborations, opportunities, or just to say hello! I'll get back to you as soon as possible.
      </p>
      
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Mail size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Email</p>
            <a 
              href={`mailto:${contactData.email}`} 
              className="text-white hover:text-white/80"
            >
              {contactData.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Phone</p>
            <a 
              href={`tel:${contactData.phone}`} 
              className="text-white hover:text-white/80"
            >
              {contactData.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <MapPin size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Location</p>
            <p className="text-white">{contactData.location}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-8">
        <a 
          href={contactData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href={contactData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href={contactData.socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={18} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
