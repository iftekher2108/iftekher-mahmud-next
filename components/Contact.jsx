'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {

    return (
        <>

            <div className="relative mx-auto my-8 md:my-10 px-2 md:px-0">
                {/* Subtle gradient background for section, matching project style */}

                <div className="mb-4 pt-3 px-6 relative z-10">
                    <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="glass px-6 py-3 uppercase text-xl text-center font-bold section-title">
                        Contact
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 p-3 mb-4">

                    <div className="col-span-1 card p-5 flex-row border border-transparent hover:border-primary gap-4 bg-base-200 shadow-xl">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                            <i className="fa-brands text-2xl fa-linkedin-in"></i>
                        </div>
                        <div>
                            <h4 className="text-xl text-primary font-bold mb-2">Linkedin</h4>
                            <p className=" text-sm">www.linkedin.com/in/iftekhermahmud1</p>
                        </div>
                    </div>

                    {/* <div className="col-span-1 card p-5 flex-row border border-transparent hover:border-primary gap-4 bg-base-200 shadow-xl">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                            <i className="fa-brands text-2xl fa-facebook-f"></i>
                        </div>
                        <div>
                            <h4 className="text-xl text-primary font-bold mb-2">Facebook</h4>
                            <p className=" text-sm">www.facebook.com/mdiftekher.mahmud</p>
                        </div>
                    </div> */}

                    <div className="col-span-1 card p-5 flex-row border border-transparent hover:border-primary gap-4 bg-base-200 shadow-xl">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                            <i className="fa-brands text-2xl fa-google"></i>
                        </div>
                        <div>
                            <h4 className="text-xl text-primary font-bold mb-2">G-mail</h4>
                            <p className=" text-sm">iftekhermahmud1@gmail.com</p>
                        </div>
                    </div>


                </div>

                <div className="grid lg:grid-cols-2 items-center justify-center gap-5 ">
                    <div className="col-span-1 card flex items-center justify-center h-full shadow-xl border-2 border-primary">
                        <Image src={'/contact.png'} height={500} width={500} alt="contact" />
                    </div>

                    <div className="col-span-1">
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl" />
                        <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
                            {/* Decorative background accent */}
                            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl z-0" />
                            <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/10 rounded-full blur-2xl z-0" />
                            <div className="relative z-10 p-6 md:p-10">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="mb-2">
                                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary shadow-lg">
                                            <i className="fa-solid fa-envelope text-3xl"></i>
                                        </span>
                                    </div>
                                    <h1 className="text-4xl font-extrabold mb-2 text-primary text-center">Contact Us</h1>
                                    <h2 className="text-lg text-base-content/80 text-center mb-2 font-medium">We love to hear from you!</h2>
                                    <p className="text-base text-base-content/70 text-center max-w-md mb-2">Fill out the form below and we will get back to you as soon as possible. Whether you have a question, project idea, or just want to say hello, our inbox is always open.</p>
                                </div>
                                <form action={'https://formspree.io/f/mqkoqqjw'} method="post" className="flex flex-col gap-4 mt-4">
                                        <label className="floating-label">
                                            <span className="text-base font-semibold">Name</span>
                                            <input type="text"  className="input input-bordered input-lg focus:input-primary focus:outline-0  w-full" required />
                                        </label>

                                        <label className="floating-label">
                                            <span className="text-base font-semibold">Email</span>
                                        <input type="email" className="input input-bordered input-lg focus:input-primary focus:outline-0 w-full" required />
                                        </label>

                                        <label className="floating-label">
                                            <span className="text-base font-semibold">Message...</span>
                                        <textarea className="textarea textarea-lg focus:textarea-primary focus:outline-0 w-full min-h-[150px]" required></textarea>
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
