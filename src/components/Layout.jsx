import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            <Header />
            <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
