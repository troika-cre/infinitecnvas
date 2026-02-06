import React from 'react';

const TOS = () => {
    return (
        <div className="max-w-4xl mx-auto pt-10 pb-20 text-gray-300">
            <h1 className="text-4xl font-bold text-white mb-10">Terms of Service</h1>

            <div className="prose prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Infinite Canvas LLC. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                    <p>
                        Infinite Canvas LLC provides digital design and development services ("Services"). The specific scope of services is determined by individual agreements or contracts signed with our clients.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                    <p>
                        Unless agreed otherwise in writing, all materials, including code, designs, and content created by Infinite Canvas LLC, remain the intellectual property of Infinite Canvas LLC until full payment is received. Upon full payment, usage rights are transferred to the client as specified in the project agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                    <p>
                        Infinite Canvas LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of Wyoming, United States, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at hello@infinitecanvasllc.com.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TOS;
