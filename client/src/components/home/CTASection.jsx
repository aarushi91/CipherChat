import { Link } from "react-router-dom";

const CTASection = () => {

    return (

        <section className="py-32 px-6">

            <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-purple-700/30 to-fuchsia-700/20 border border-purple-500/20 p-16 text-center">

                <h2 className="text-5xl font-bold">

                    Ready to experience CipherChat?

                </h2>

                <p className="mt-6 text-zinc-300 text-lg">

                    Secure messaging. Beautiful design.
                    Real-time communication.

                </p>

                <Link
                    to="/register"
                    className="inline-block mt-10 px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
                >

                    Create Free Account

                </Link>

            </div>

        </section>

    );

};

export default CTASection;