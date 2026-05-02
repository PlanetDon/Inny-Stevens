'use client'

import { motion } from 'framer-motion'

const Motion = motion


const variants = {
  hidden: { opacity: 0, y: 26 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Reveal({ children, className = '', delay = 0, amount = 0.2 }) {
  return (
    <Motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      custom={delay}
    >
      {children}
    </Motion.div>
  )
}


