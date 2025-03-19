
/**
 * Animation utility for creating smooth enter animations
 * with staggered delays for multiple elements
 */

export const ANIMATION_DURATION = 0.8;
export const STAGGER_DELAY = 0.15;

export const fadeInUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      delay,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
});

export const scaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION * 0.6,
      delay,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  }
});

export const staggerContainer = (staggerChildren: number = 0.05, delayChildren: number = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const slideInFromRight = (delay: number = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: ANIMATION_DURATION,
      delay,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
});

export const slideInFromLeft = (delay: number = 0) => ({
  initial: { opacity: 0, x: -40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: ANIMATION_DURATION,
      delay,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
});
