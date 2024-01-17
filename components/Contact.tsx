import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section lg:p-8 mt-4" id='contact'>
            <div className="container mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-36">

                {/* Join the Team Section */}
                <div className="join-team-section text-center pb-12 border-b">
                    <h2 className="text-3xl font-medium text-white">
                        Join the Team
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Looking for a career opportunity? We'd love to hear from you.
                    </p>
                    <br></br>
                    <p className="text-2xl font-medium text-white">
                        <a href="mailto:hr@notqwerty.com" className="email-link">hr@notqwerty.com</a>
                    </p>

                </div>

                {/* Let Us Build for You Section */}
                <div className="build-for-you-section text-center py-12">
                    <h2 className="text-3xl font-medium text-white">
                        Let Us Build for You
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Have a project in mind? Let's make it happen.
                    </p>
                    <form className="mt-6">
                        <center>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdtML6banEH7NOp-kih7Esp0Xz451_pkH4kmQXpq_v_8E-p_A/viewform?embedded=true"
                                className="responsive-iframe"
                                >
                                Loading…
                            </iframe>
                        </center>
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Contact;
