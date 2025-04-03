
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
      <p className="text-white/80">
        Got questions? Curious minds are always welcome—let's chat!
      </p>
      
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Mail size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Email</p>
            <a 
              href="mailto:Jainrp.apoorva@gmail.com" 
              className="text-white hover:text-white/80"
            >
              Jainrp.apoorva@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <MapPin size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-white/50">Location</p>
            <p className="text-white">Los Angeles, California</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-8">
        <a 
          href="https://github.com/apoorvajainrp21"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://apoorvajainrp21.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
