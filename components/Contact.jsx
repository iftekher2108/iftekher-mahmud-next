'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const contactItems = [
    { label: 'Email', value: 'iftekhermahmud1@gmail.com', href: 'mailto:iftekhermahmud1@gmail.com', icon: 'fa-solid fa-envelope' },
    { label: 'LinkedIn', value: 'linkedin.com/in/iftekhermahmud1', href: 'https://www.linkedin.com/in/iftekhermahmud1/', icon: 'fa-brands fa-linkedin-in' },
    { label: 'GitHub', value: 'github.com/iftekher2108', href: 'https://github.com/iftekher2108', icon: 'fa-brands fa-github' },
    { label: 'WhatsApp', value: 'Start a conversation', href: 'https://wa.me/8801580359517', icon: 'fa-brands fa-whatsapp' },
];

export default function Contact() {

    return (
        <>

            <div className="relative mx-auto my-8 md:my-10 px-2 md:px-0">

                <div className="mb-4 pt-3 px-6 relative z-10">
                    <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-3 text-3xl font-black text-center text-base-content sm:text-4xl">
                        Let's build something useful
                    </motion.h2>
                    <p className="my-3 leading-7 text-center text-base-content/65">Have a project, opportunity, or technical challenge to discuss? Send me a message. I'd be glad to learn more.</p>
                    {/* <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="glass px-6 py-3 uppercase text-xl text-center font-bold section-title">
                        Contact
                    </motion.p> */}
                </div>
                {/* 
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-3 mb-4">

                    <div className="col-span-1 card p-5 flex-row border border-transparent hover:border-primary gap-4 bg-base-200 shadow-xl">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                            <i className="fa-brands text-2xl fa-linkedin-in"></i>
                        </div>
                        <div>
                            <h4 className="text-xl text-primary font-bold mb-2">Linkedin</h4>
                            <p className=" text-sm">www.linkedin.com/in/iftekhermahmud1</p>
                        </div>
                    </div>

                    <div className="col-span-1 card p-5 flex-row border border-transparent hover:border-primary gap-4 bg-base-200 shadow-xl">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                            <i className="fa-brands text-2xl fa-facebook-f"></i>
                        </div>
                        <div>
                            <h4 className="text-xl text-primary font-bold mb-2">Facebook</h4>
                            <p className=" text-sm">www.facebook.com/mdiftekher.mahmud</p>
                        </div>
                    </div>

                    <div className="col-span-1 card p-5 flex-row border border-transparent hover:border-primary gap-4 bg-base-200 shadow-xl">
                        <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                            <i className="fa-brands text-2xl fa-google"></i>
                        </div>
                        <div>
                            <h4 className="text-xl text-primary font-bold mb-2">Email</h4>
                            <p className=" text-sm">iftekhermahmud1@gmail.com</p>
                        </div>
                    </div>

                </div> */}

                <div className="grid lg:grid-cols-5 items-center justify-center gap-5 ">
                    <div className="col-span-2 card flex items-center justify-center h-full shadow-xl border-2 border-primary">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image src="/contact.png" width={600} height={500} alt="Contact Iftekher Mahmud" className="mx-auto max-h-85 w-full object-contain p-2" />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 w-full lg:grid-cols-1 p-4">
                            {contactItems.map(item =>
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
                                <div className="flex flex-col items-center mb-6">
                                    <div className="mb-2">
                                        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary shadow-lg">
                                            <i className="fa-solid fa-envelope text-3xl"></i>
                                        </span>
                                    </div>
                                    <h1 className="text-4xl font-extrabold mb-2 text-primary text-center">Get In Touch</h1>
                                    <h2 className="text-lg text-base-content/80 text-center mb-2 font-medium">Let’s Build Something Amazing</h2>
                                    <p className="text-base text-base-content/70 text-center max-w-md mb-2">
                                        I’m always excited to collaborate on projects that challenge my creativity and push boundaries.
                                        If you’re a company, startup, or individual looking for a Software Engineer who cares about performance, security, scalable system design, and results — let’s talk!

                                    </p>
                                </div>
                                <form action={'https://formspree.io/f/mqkoqqjw'} method="post" className="flex flex-col gap-4 mt-4">
                                    <label className="floating-label">
                                        <span className="text-base font-semibold">Name</span>
                                        <input type="text" name="name" className="input input-bordered input-lg focus:input-primary focus:outline-0  w-full" required />
                                    </label>

                                    <label className="floating-label">
                                        <span className="text-base font-semibold">Email</span>
                                        <input type="email" name="email" className="input input-bordered input-lg focus:input-primary focus:outline-0 w-full" required />
                                    </label>

                                    <label className="floating-label">
                                        <span className="text-base font-semibold">Subject</span>
                                        <input type="text" name="_subject" className="input input-bordered input-lg focus:input-primary focus:outline-0 w-full" required />
                                    </label>

                                    <label className="floating-label">
                                        <span className="text-base font-semibold">Message...</span>
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
