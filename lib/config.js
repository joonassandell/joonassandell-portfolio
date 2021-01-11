// 'linear'
// 'easeIn', 'easeOut', 'easeInOut'
// 'circIn', 'circOut', 'circInOut'
// 'backIn', 'backOut', 'backInOut'
// 'anticipate'
// easeInOutExpo [0.87, 0, 0.13, 1]
// easeInOutQuart [0.76, 0, 0.24, 1]
// export const defaultTransition = {
//   duration: 0.8,
//   ease: [0.175, 0.85, 0.42, 0.96],
//   type: 'tween', 
// }

export const transPrimary = {
  duration: 1.2,
  ease: [0.76, 0, 0.18, 1],
}

export const transSecondary = {
  duration: 1,
  ease: [0.87, 0, 0.13, 1],
}

export const headerAnim = {
  navButtonActive: {
    animate: { 
      opacity: 1,
      y: 0,
    },
    // enter: {
    //   opacity: 1,
    //   y: -48,
    // },
    initial: { 
      opacity: 0,
      y: 24,
    },
    exit: { 
      y: -24,
      opacity: 0, 
    },
    transition: {
      // bounce: 0, 
      delay: 0.2,
      duration: 0.8,
      // ease: 'easeInOut',
      ease: [0.175, 0.85, 0.42, 0.96],
      // stiffness: 80,
      type: 'tween', 
      // damping: 10,
      // stiffness: 100,
    },
  }
}