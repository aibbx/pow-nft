import React from 'react';
import { Link } from "react-router-dom";
import { Twitter, Github, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wealth-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Github className="h-4 w-4" />} />
              <SocialLink href="#" icon={<MessageSquare className="h-4 w-4" />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-wealth-gold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Features", href: "/#features" },
                { name: "How It Works", href: "/#how-it-works" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-wealth-silver hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-wealth-gold">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Documentation", href: "#" },
                { name: "Whitepaper", href: "#" },
                { name: "Audit Reports", href: "#" },
                { name: "Smart Contracts", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-wealth-silver hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-wealth-gold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-wealth-silver">
                Email: <a href="mailto:info@proofofwealth.com" className="hover:text-white transition-colors">info@proofofwealth.com</a>
              </li>
              <li className="text-wealth-silver">
                Support: <a href="mailto:support@proofofwealth.com" className="hover:text-white transition-colors">support@proofofwealth.com</a>
              </li>
            </ul>
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

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
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
