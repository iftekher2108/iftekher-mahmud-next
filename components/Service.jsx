"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/dataset";

export default function Service() {
  return (
    <div className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl overflow-x-hidden">

      <div className="mb-8 pt-3 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
            What I Offer
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Services
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60">
            Delivering modern web development, scalable applications,
            and creative digital solutions to bring your ideas to life.
          </p>

          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="w-10 h-1 rounded-full bg-primary"></span>
            <span className="w-3 h-1 rounded-full bg-secondary"></span>
            <span className="w-10 h-1 rounded-full bg-primary/30"></span>
          </div>
        </motion.div>
      </div>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden
              bg-base-100 border border-base-300
              rounded-2xl p-7
              transition-all duration-500 ease-out
              hover:-translate-y-2
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
              className="text-2xl font-bold mb-3
                transition-colors duration-500
                group-hover:text-white"
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-base-content/60 text-sm md:text-base mb-6
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
