const Footer = () => {

    return (

        <footer className="border-t border-white/10 mt-20">

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold text-purple-400">

                        CipherChat

                    </h2>

                    <p className="text-zinc-500 mt-2">

                        Private. Secure. Instant.

                    </p>

                </div>

                <div className="flex gap-8 mt-8 md:mt-0 text-zinc-400">

                    <a href="#">Privacy</a>

                    <a href="#">Terms</a>

                    <a href="#">Support</a>

                    <a href="#">Contact</a>

                </div>

            </div>

        </footer>

    );

};

export default Footer;