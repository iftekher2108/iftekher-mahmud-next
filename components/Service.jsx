'use client'
import { motion } from "framer-motion"

export default function Service() {
    return (
        <div className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl overflow-x-hidden">
            <div className="mb-12 pt-3 relative z-10">
                <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="glass px-6 py-3 uppercase text-xl text-center font-bold section-title">
                    Services
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">

            </div>

        </div>
    )
}
