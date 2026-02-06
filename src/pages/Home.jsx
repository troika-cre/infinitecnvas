import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="space-y-32">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 glowing-text">
                        Design Beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Boundaries</span>
                    </h1>
                </motion.div>

                <motion.p
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                >
                    We craft immersive digital experiences that captivate, convert, and inspire.
                    Your vision, realized on an infinite canvas.
                </motion.p>

                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                    className="flex gap-4"
                >
                    <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                        Start a Project <ArrowRight size={20} />
                    </Link>
                    <Link to="/services" className="px-8 py-4 glass-panel rounded-full hover:bg-white/10 transition-colors">
                        Our Services
                    </Link>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <Palette className="w-8 h-8 text-primary" />, title: "Visual Mastery", desc: "Aesthetics that breathe life into your brand." },
                    { icon: <Code className="w-8 h-8 text-secondary" />, title: "Clean Code", desc: "Performance-optimized, scalable engineering." },
                    { icon: <Zap className="w-8 h-8 text-accent" />, title: "Rapid Delivery", desc: "From concept to launch in record time." }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-2xl glass-panel relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="mb-6">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center relative overflow-hidden rounded-3xl bg-gradient-to-b from-surface to-background border border-white/5">
                <h2 className="text-4xl font-bold mb-6">Ready to expand your horizon?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let's collaborate to build something extraordinary together.</p>
                <Link to="/contact" className="inline-block px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/25">
                    Get in Touch
                </Link>
            </section>
        </div>
    );
};

export default Home;
