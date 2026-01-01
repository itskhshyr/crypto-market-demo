"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
export default function AuthLayout({ children }) {
  const pathname = usePathname(); 
  return (
    <AnimatePresence mode="wait">
     
         <motion.div
        key={pathname} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
