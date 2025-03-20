
import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from '@/utils/animation';

const PartnersSection = () => {
  const partners = [
    { name: "Ethereum", logo: "/public/ethereum-logo.svg" },
    { name: "Binance", logo: "/public/binance-logo.svg" },
    { name: "Coinbase", logo: "/public/coinbase-logo.svg" },
    { name: "Metamask", logo: "/public/metamask-logo.svg" },
    { name: "OKX", logo: "/public/okx-logo.svg" }
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
            Our <span className="text-wealth-gold">Partners</span> in Excellence
          </h2>
          <p className="text-lg text-wealth-silver">
            We collaborate with industry leaders to provide you with the most secure and prestigious wealth verification experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp()}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-white/10 p-6 rounded-xl hover:bg-wealth-gold/10 transition-colors duration-300 w-full flex items-center justify-center h-24">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-10 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="font-medium text-center">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
