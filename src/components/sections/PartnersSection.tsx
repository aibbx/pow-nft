
import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from '@/utils/animation';

const PartnersSection = () => {
  // Creating a stealth mode version with placeholders instead of actual partners
  const mysteriousPartners = Array(5).fill(null).map((_, index) => ({
    id: index,
  }));

  return (
    <section className="py-20 md:py-32 bg-wealth-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp()}
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Mysterious <span className="text-wealth-gold">Partners</span> Revealed Soon
          </h2>
          <p className="text-lg text-wealth-silver">
            We're finalizing partnerships with industry giants. Stay tuned for the big reveal of our prestigious collaborations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mysteriousPartners.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={fadeInUp()}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-white/10 p-6 rounded-xl hover:bg-wealth-gold/10 transition-colors duration-300 w-full flex items-center justify-center h-24 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-wealth-gold opacity-50 group-hover:opacity-80 transition-opacity"
                  >
                    <path d="M21 9.5V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.6l-.8-.8a2 2 0 0 0-1.4-.6H9.8a2 2 0 0 0-1.4.6l-.8.8a2 2 0 0 1-1.4.6H5a2 2 0 0 0-2 2v2.5" />
                    <path d="M9 15.5h6" />
                    <path d="M12.006 18.494v0" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-wealth-gold/10 to-transparent -translate-x-full animate-shimmer"></div>
              </div>
              <p className="font-medium text-center text-wealth-silver flex items-center justify-center gap-1">
                <span>Coming Soon</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-wealth-gold"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
