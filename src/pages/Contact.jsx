import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-10 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Talk</h1>
                <p className="text-gray-400 text-lg">
                    Ready to start your next project? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1" />
                                <div>
                                    <p className="font-semibold text-white">Office</p>
                                    <p className="text-gray-400">
                                        INFINITE CANVAS LLC<br />
                                        1021 E Lincolnway Unit 633<br />
                                        Cheyenne, WY 82001-4851, US
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-primary" />
                                <div>
                                    <p className="font-semibold text-white">Email</p>
                                    <a href="mailto:hello@infinitecanvasllc.com" className="text-gray-400 hover:text-white transition-colors">
                                        hello@infinitecanvasllc.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-8 rounded-2xl"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
