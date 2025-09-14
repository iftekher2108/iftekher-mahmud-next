"use client"

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavMenu from "@/components/NavMenu";

export default function Template({ children }) {

    const [theme, setTheme] = useState('default');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.setAttribute('data-theme', savedTheme);
            } else {
                document.documentElement.setAttribute('data-theme', savedTheme);
            }
        }
    }, []);

    // Save theme to localStorage & apply to DOM when it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme]);

    const pathname = usePathname();

    return (
        <html lang="en" data-theme={theme}>
            <body>
                <NavMenu theme={theme} setTheme={setTheme} />
                <div className="overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent dark:from-base-200 dark:via-base-300 dark:to-base-100 transition-colors duration-700">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 100, duration: 0.5 }}
                            className="lg:m-10 overflow-hidden md:m-4 sm:m-2"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                    <Navbar />
                    <Footer />
                </div>

            </body>
        </html>
    )
}
