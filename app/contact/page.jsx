export default function Contact() {
    return (
        <section className="relative mx-auto my-16 md:my-20 px-2 md:px-0">
            {/* Subtle gradient background for section, matching project style */}
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
                        <h2 className="text-lg text-base-content/80 text-center mb-2 font-medium">We'd love to hear from you!</h2>
                        <p className="text-base text-base-content/70 text-center max-w-md mb-2">Fill out the form below and we'll get back to you as soon as possible. Whether you have a question, project idea, or just want to say hello, our inbox is always open.</p>
                    </div>
                    <form className="flex flex-col gap-6 mt-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="you@email.com" className="input input-bordered input-primary w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Message</span>
                            </label>
                            <textarea className="textarea textarea-primary w-full min-h-[120px]" placeholder="Type your message..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 w-full text-lg font-semibold shadow-md hover:scale-105 transition-transform">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
