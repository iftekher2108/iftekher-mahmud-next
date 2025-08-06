"use client"
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css"
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en" data-theme='light'>
      <body>
  <div className="overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent dark:from-base-200 dark:via-base-300 dark:to-base-100 transition-colors duration-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100, duration: 0.5 }}
              className="lg:m-10 md:m-4 sm:m-2"
            >
              {children}
              <Navbar/>
              <Footer/>
            </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
