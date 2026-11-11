'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactItems } from "@/lib/dataset";

export default function Contact() {
    return (
        <>

            <div className="relative mx-auto my-8 md:my-10 px-2 md:px-0">


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center space-y-4 mt-4 mb-8"
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
                        Let's Connect
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Let's Build{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            Something Useful
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60 leading-relaxed">
                        Have a project, opportunity, or technical challenge to discuss?
                        Send me a message. I'd be glad to learn more and explore how we
                        can create something meaningful together.
                    </p>

                    <div className="flex items-center justify-center gap-2 pt-1">
                        <span className="w-10 h-1 rounded-full bg-primary"></span>
                        <span className="w-3 h-1 rounded-full bg-secondary"></span>
                        <span className="w-10 h-1 rounded-full bg-primary/30"></span>
                    </div>
                </motion.div>


                <div className="grid lg:grid-cols-5 items-center justify-center gap-5 ">
                    <div className="col-span-2 card flex items-center justify-center h-full shadow-xl border-2 border-primary">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image src="/contact.png" width={600} height={500} alt="Contact Iftekher Mahmud" className="mx-auto max-h-85 w-full object-contain p-2" />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 w-full lg:grid-cols-1 p-4">
                            {contactItems.map((item, idx) =>
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 + idx }}
                                >
                                    <Link key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-4 rounded-xl border border-base-300 bg-base-200/50 p-4 transition-colors hover:border-primary/50">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg text-primary">
                                            <i className={item.icon} />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs font-semibold uppercase tracking-wider text-base-content/45">{item.label}</span>
                                            <span className="mt-1 block truncate text-sm font-semibold text-base-content">{item.value}</span>
                                        </span>
                                        <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-xs text-base-content/40" />
                                    </Link>
                                </motion.div>

                            )}
                        </div>

                        {/* <Image src={'/contact.png'} height={500} width={500} alt="contact" /> */}
                    </div>

                    <div className="col-span-3">
                        <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl" />
                        <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
                            {/* Decorative background accent */}
                            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl z-0" />
                            <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/10 rounded-full blur-2xl z-0" />
                            <div className="relative z-10 p-6 md:p-10">


                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className="flex flex-col items-center text-center mb-8 px-4"
                                >
                                    {/* Icon */}
                                    <div className="mb-5">
                                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary shadow-lg shadow-primary/10">
                                            <i className="fa-solid fa-envelope-open-text text-3xl"></i>
                                        </span>
                                    </div>

                                    {/* Badge */}
                                    <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-2">
                                        Get In Touch
                                    </span>

                                    {/* Heading */}
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                        Let's Build{" "}
                                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                                            Something Amazing
                                        </span>
                                    </h1>

                                    {/* Description */}
                                    <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-base-content/65 leading-relaxed">
                                        Have an exciting project, a business idea, or a technical challenge?
                                        I'm always open to meaningful collaborations and new opportunities.
                                        Let's connect and create secure, scalable, and high-performance
                                        software solutions that make a real impact.
                                    </p>

                                    {/* Decorative Line */}
                                    <div className="flex items-center justify-center gap-2 pt-5">
                                        <span className="w-10 h-1 rounded-full bg-primary"></span>
                                        <span className="w-3 h-1 rounded-full bg-secondary"></span>
                                        <span className="w-10 h-1 rounded-full bg-primary/30"></span>
                                    </div>
                                </motion.div>


                                <form action={'https://formspree.io/f/mqkoqqjw'} method="post" className="flex flex-col gap-4 mt-4">
                                    <label className="floating-label">
                                        <span className="text-lg font-semibold">Name</span>
                                        <input type="text" name="name" className="input input-bordered input-lg focus:input-primary focus:outline-0  w-full" required />
                                    </label>

                                    <label className="floating-label">
                                        <span className="text-lg font-semibold">Email</span>
                                        <input type="email" name="email" className="input input-bordered input-lg focus:input-primary focus:outline-0 w-full" required />
                                    </label>

                                    <label className="floating-label">
                                        <span className="text-lg font-semibold">Subject</span>
                                        <input type="text" name="_subject" className="input input-bordered input-lg focus:input-primary focus:outline-0 w-full" required />
                                    </label>

                                    <label className="floating-label">
                                        <span className="text-lg font-semibold">Message...</span>
                                        <textarea className="textarea textarea-lg focus:textarea-primary focus:outline-0 w-full min-h-37.5" name="message" required></textarea>
                                    </label>

                                    <button type="submit" className="btn btn-primary btn-lg w-full text-md tracking-[2px] font-bold shadow-md scale-95 hover:scale-100 transition-transform">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
