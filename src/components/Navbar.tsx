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
          <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gold-gradient">
            Proof<span className="text-wealth-dark">Of</span>Wealth
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
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
            <NavLinks mobile />
            <WalletConnectButton variant="fancy" className="w-full" />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={cn(
            "font-medium transition-colors hover:text-wealth-gold",
            mobile ? "text-center py-2" : ""
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
