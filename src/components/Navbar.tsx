
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import WalletConnectButton from './WalletConnectButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If sectionId is empty (Home button), scroll to the top
    if (!sectionId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the fixed navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="font-display text-2xl font-bold">
            <span className="text-wealth-gold">Proof</span>
            <span className="text-black">Of</span>
            <span className="text-wealth-gold">Wealth</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks onNavLinkClick={handleNavLinkClick} />
          <WalletConnectButton variant="fancy" />
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 bg-white/95 backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile onNavLinkClick={handleNavLinkClick} />
            <WalletConnectButton variant="fancy" className="w-full" />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onNavLinkClick: (sectionId: string) => void;
}

const NavLinks = ({ mobile = false, onNavLinkClick }: NavLinksProps) => {
  const links = [
    { name: "Home", href: "/", sectionId: "" },
    // About link removed
    { name: "Features", href: "/#features", sectionId: "features" },
    { name: "How It Works", href: "/#how-it-works", sectionId: "how-it-works" },
  ];
  
  return (
    <>
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => onNavLinkClick(link.sectionId)}
          className={cn(
            "font-medium transition-colors hover:text-wealth-gold text-left",
            mobile ? "text-center py-2 w-full" : ""
          )}
        >
          {link.name}
        </button>
      ))}
    </>
  );
};

export default Navbar;
