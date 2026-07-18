import Badge from "../common/Badge";
import Button from "../common/Button";
import HeroPreview from "./HeroPreview";

const Hero = () => {

    return (

        <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT */}

                <div>

                    <Badge>

                        Next Generation Secure Messenger

                    </Badge>

                    <h1
                        className="
                        mt-8
                        text-6xl
                        lg:text-7xl
                        font-extrabold
                        leading-tight
                        "
                    >
                        Private.

                        <span className="text-purple-500">

                            {" "}Secure.

                        </span>

                        <br />

                        Beautiful Communication.

                    </h1>

                    <p
                        className="
                        mt-8
                        text-xl
                        text-zinc-400
                        leading-10
                        "
                    >
                        Experience lightning-fast messaging,

                        encrypted conversations,

                        voice & video calls,

                        powerful communities

                        and seamless collaboration inside one premium application.

                    </p>

                    <div className="flex gap-5 mt-10">

                        <Button to="/register">

                            Get Started

                        </Button>

                        <Button
                            to="/login"
                            variant="secondary"
                        >

                            Live Demo

                        </Button>

                    </div>

                    <div className="flex gap-8 mt-14 text-zinc-400">

                        <span>🔒 End-to-End Encryption</span>

                        <span>⚡ Real-Time</span>

                        <span>🌎 Cross Platform</span>

                    </div>

                </div>

                {/* RIGHT */}

                <HeroPreview />

            </div>

        </section>

    );

};

export default Hero;