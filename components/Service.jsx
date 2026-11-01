"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/dataset";

export default function Service() {
  return (
    <div className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl overflow-x-hidden">
      <div className="mb-12 pt-3 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass px-6 py-3 uppercase text-xl text-center font-bold section-title"
        >
          Services
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden
              bg-base-100 border border-base-300
              rounded-2xl p-7
              transition-all duration-500 ease-out
              hover:-translate-y-3
              shadow-xl
              hover:shadow-2xl
              hover:bg-primary
              hover:border-primary"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-2xl
                ${service.color} bg-opacity-10
                flex items-center justify-center
                mb-6 transition-all duration-500
                group-hover:bg-white/20
                group-hover:rotate-6
                group-hover:scale-110`}
            >
              <i className={`${service.icon} text-3xl
                  transition-colors duration-500
                  group-hover:text-white`}
              ></i>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold mb-3
                transition-colors duration-500
                group-hover:text-white"
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-base-content/60 text-sm
                leading-7 mb-6
                transition-colors duration-500
                group-hover:text-white/80"
            >
              {service.description}
            </p>

            {/* Background Decoration */}
            <div
              className="absolute -right-10 -bottom-10
                w-32 h-32 rounded-full
                bg-primary/5 blur-2xl
                transition-all duration-500
                group-hover:bg-white/20
                group-hover:scale-150
                pointer-events-none"
            /></div>
        ))}
      </div>
    </div>
  );
}
