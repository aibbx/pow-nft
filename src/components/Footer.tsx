
import React from 'react';
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
              <span className="text-black">Of</span>
              <span className="text-wealth-gold">Wealth</span>
            </div>
            <p className="text-sm text-wealth-silver max-w-xs">
              The premier Stable NFT protocol that allows you to showcase your wealth through verifiable on-chain assets.
            </p>
          </div>
          
          {/* Social Links - Now on the right, stacked vertically */}
          <div className="flex flex-col space-y-3">
            <SocialLink 
              href="https://twitter.com/PoWProtocol" 
              icon={<X className="h-4 w-4" />} 
              label="Contact on X"
              primary
            />
            <SocialLink 
              href="https://github.com/aibbx/pow-nft.git" 
              icon={<Github className="h-4 w-4" />} 
              label="Check on GitHub"
              primary
            />
          </div>
        </div>
        
        {/* Bottom section - removed Terms of Service and Privacy Policy links */}
        <div className="border-t border-wealth-silver/20 pt-8 mt-8 text-center text-sm text-wealth-silver">
          <p>© {new Date().getFullYear()} Proof Of Wealth. All rights reserved.</p>
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
