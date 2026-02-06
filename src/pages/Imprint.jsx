import React from 'react';

const Imprint = () => {
    return (
        <div className="max-w-3xl mx-auto pt-10 pb-20">
            <h1 className="text-4xl font-bold mb-10">Imprint</h1>

            <div className="glass-panel p-8 rounded-2xl space-y-6 text-gray-300">
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">Company Information</h2>
                    <p>INFINITE CANVAS LLC</p>
                    <p>1021 E Lincolnway Unit 633</p>
                    <p>Cheyenne, WY 82001-4851</p>
                    <p>United States</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
                    <p>Email: hello@infinitecanvasllc.com</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-white mb-2">Represented by</h2>
                    <p>Management of Infinite Canvas LLC</p>
                </div>

                <div className="pt-6 text-sm text-gray-500">
                    <p>
                        Disclaimer: Despite careful control of the contents, we do not assume any liability for the contents of external links.
                        The operators of the linked pages are solely responsible for their content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Imprint;
