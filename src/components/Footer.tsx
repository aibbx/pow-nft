
import React from 'react';
import { Link } from "react-router-dom";
import { X, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wealth-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold">
              <span className="text-wealth-gold">Proof</span>
              <span className="text-white">Of</span>
              <span className="text-wealth-gold">Wealth</span>
            </div>
            <p className="text-sm text-wealth-silver max-w-xs">
              The premier Stable NFT protocol that allows you to showcase your wealth through verifiable on-chain assets.
            </p>
          </div>
          
          {/* Social Links - Now on the right */}
          <div className="flex items-center space-x-4">
            <SocialLink 
              href="https://twitter.com" 
              icon={<X className="h-4 w-4" />} 
              label="Contact on X"
              primary
            />
            <SocialLink href="#" icon={<Github className="h-4 w-4" />} />
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-wealth-silver/20 pt-8 mt-8 text-center text-sm text-wealth-silver">
          <p>© {new Date().getFullYear()} Proof Of Wealth. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label, 
  primary = false 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label?: string;
  primary?: boolean;
}) => {
  if (primary && label) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-wealth-gold text-wealth-dark rounded-full hover:bg-wealth-gold/90 transition-colors font-medium"
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-white/10 rounded-full hover:bg-wealth-gold/20 transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
