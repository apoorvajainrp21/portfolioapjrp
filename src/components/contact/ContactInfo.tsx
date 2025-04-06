
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';

const ContactInfo = () => {
  const { theme } = useTheme();
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-black';
  const bgColorClass = theme === 'dark' ? 'bg-white/10' : 'bg-black/10';
  const hoverClass = theme === 'dark' ? 'hover:bg-white/20' : 'hover:bg-black/20';
  
  return (
    <div className="lg:col-span-2 space-y-6">
      <h3 className={`text-2xl font-bold ${textColorClass}`}>Let's Connect</h3>
      <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
        Got questions? Curious minds are always welcome—let's chat!
      </p>
      
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${bgColorClass} flex items-center justify-center`}>
            <Mail size={18} className={textColorClass} />
          </div>
          <div>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>Email</p>
            <a 
              href="mailto:jainrp.apoorva@gmail.com" 
              className={`${textColorClass} ${theme === 'dark' ? 'hover:text-white/80' : 'hover:text-black/80'}`}
            >
              jainrp.apoorva@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${bgColorClass} flex items-center justify-center`}>
            <MapPin size={18} className={textColorClass} />
          </div>
          <div>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>Location</p>
            <p className={textColorClass}>Los Angeles, California</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-8">
        <a 
          href="https://github.com/apoorvajainrp21"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full ${bgColorClass} flex items-center justify-center ${textColorClass} ${hoverClass} transition-colors`}
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://www.linkedin.com/in/apoorvajainrp/"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full ${bgColorClass} flex items-center justify-center ${textColorClass} ${hoverClass} transition-colors`}
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
