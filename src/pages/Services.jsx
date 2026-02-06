import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom, high-performance websites built with modern technologies like React, Next.js, and Tailwind CSS. We optimize for speed, SEO, and scalability.",
            features: ["Single Page Applications (SPA)", "E-commerce Solutions", "CMS Integration", "Performance Tuning"]
        },
        {
            title: "UI/UX Design",
            description: "User-centric design that balances beauty with functionality. We create intuitive interfaces that guide users seamlessly toward your goals.",
            features: ["Wireframing & Prototyping", "Design Systems", "User Research", "Interactive High-Fidelity Mockups"]
        },
        {
            title: "Brand Identity",
            description: "More than just a logo. We define the visual and verbal language of your brand to create a cohesive and memorable market presence.",
            features: ["Logo Design", "Brand Guidelines", "Visual Assets", "Typography & Color Theory"]
        }
    ];

    return (
        <div className="pt-10 space-y-20">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
                <p className="text-gray-400 text-lg">
                    We combine creative flair with technical precision to deliver full-spectrum digital solutions.
                </p>
            </div>

            <div className="grid gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-10 p-8 glass-panel rounded-3xl"
                    >
                        <div className="flex-1 space-y-4">
                            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-2xl p-6">
                            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">What's Included</h3>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle size={18} className="text-secondary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
