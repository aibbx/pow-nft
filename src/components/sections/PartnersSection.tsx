
import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from '@/utils/animation';

const PartnersSection = () => {
  // Replacing the numbered placeholders with partner names
  const partners = [
    { id: 1, name: "The Super Chat APP" },
    { id: 2, name: "The Great Social Media" },
    { id: 3, name: "The Leader of Group Chat" }
  ];

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
            Prestigious Collaborations
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="text-wealth-gold">Huge Surprise</span> Coming Soon
          </h2>
          <p className="text-lg text-wealth-silver">
            We collaborate with social network leaders to provide you with the most prestigious and secure wealth verification experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={fadeInUp()}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-white/5 p-6 rounded-xl hover:bg-wealth-gold/10 transition-colors duration-300 w-full flex items-center justify-center h-24 relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
                <div className="w-full text-center">
                  <span className="text-wealth-gold text-sm font-bold">{partner.name}</span>
                </div>
              </div>
              <p className="font-medium text-center text-wealth-gold/80">Coming Soon</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
