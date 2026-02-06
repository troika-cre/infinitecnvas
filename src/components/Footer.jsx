import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold text-white mb-4">INFINITECANVAS</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Designing the future of digital experiences. We build premium, scalable, and dynamic web solutions for forward-thinking brands.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
                            <li><Link to="/imprint" className="text-gray-400 hover:text-primary transition-colors text-sm">Imprint</Link></li>
                            <li><Link to="/tos" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact</h4>
                        <address className="not-italic text-gray-400 text-sm space-y-2">
                            <p>INFINITE CANVAS LLC</p>
                            <p>1021 E Lincolnway Unit 633</p>
                            <p>Cheyenne, WY 82001-4851, US</p>
                            <p className="pt-2">hello@infinitecanvasllc.com</p>
                        </address>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Infinite Canvas LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
