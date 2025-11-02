'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, delay = 0 }) {
  return (
      <motion.div className='overflow-hidden' initial={{ opacity: 0, x: 80,scale:0.9 }} animate={{ opacity: 1, x: 0, scale:1 }} transition={{ duration: 0.7, delay }}>
        {children}
      </motion.div>
  );
}
