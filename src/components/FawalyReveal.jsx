'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function FawalyReveal({ children }) {
  const reduced = useReducedMotion();
  return <motion.div initial={false} whileInView={reduced ? undefined : { opacity: [0.75, 1], y: [12, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45 }}>{children}</motion.div>;
}
