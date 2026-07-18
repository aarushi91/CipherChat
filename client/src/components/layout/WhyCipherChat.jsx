import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Zap,
    Globe
} from "lucide-react";

const items = [

    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        text: "Industry-standard encryption keeps every conversation completely private."
    },

    {
        icon: Lock,
        title: "Secure Authentication",
        text: "JWT authentication and protected APIs ensure your account stays safe."
    },

    {
        icon: Zap,
        title: "Lightning Fast",
        text: "Socket.IO delivers messages instantly with almost zero latency."
    },

    {
        icon: Globe,
        title: "Works Everywhere",
        text: "Responsive experience across desktop, tablet and mobile devices."
    }

];

const WhyCipherChat = () => {

    return (

        <section className="max-w-7xl mx-auto px-6 py-36">

            <div className="grid lg:grid-cols-2 gap-24 items-center">

                {/* LEFT */}

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                >

                    <span className="text-purple-400 font-semibold uppercase tracking-[4px]">

                        Why CipherChat

                    </span>

                    <h2 className="mt-6 text-5xl font-bold leading-tight">

                        Built Around

                        <span className="text-purple-500">

                            {" "}Privacy{" "}

                        </span>

                        and Speed.

                    </h2>

                    <p className="mt-8 text-zinc-400 leading-8 text-lg">

                        Every feature inside CipherChat is designed with one
                        purpose—making communication secure, fast and effortless.

                    </p>

                    <div className="mt-12 space-y-8">

                        {items.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={item.title}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-5"
                                >

                                    <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center">

                                        <Icon
                                            className="text-purple-400"
                                            size={28}
                                        />

                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-xl">

                                            {item.title}

                                        </h3>

                                        <p className="mt-2 text-zinc-400">

                                            {item.text}

                                        </p>

                                    </div>

                                </motion.div>

                            );

                        })}

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="relative"
                >

                    <div className="rounded-[40px] bg-gradient-to-br from-purple-600/20 to-fuchsia-500/10 border border-white/10 backdrop-blur-xl p-10">

                        <div className="space-y-8">

                            <div className="rounded-2xl bg-zinc-900/70 p-6">

                                🔐 End-to-End Encryption

                            </div>

                            <div className="rounded-2xl bg-zinc-900/70 p-6 ml-12">

                                ⚡ Socket.IO Real-Time Engine

                            </div>

                            <div className="rounded-2xl bg-zinc-900/70 p-6">

                                🌍 Cross Platform

                            </div>

                            <div className="rounded-2xl bg-zinc-900/70 p-6 ml-12">

                                ☁ Cloud Synchronization

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    );

};

export default WhyCipherChat;