import {
    Shield,
    MessageCircle,
    Users,
    Phone,
    Cloud,
    Smartphone
} from "lucide-react";

import FeatureCard from "../common/FeatureCard";
import SectionTitle from "../common/SectionTitle";

const features = [

    {
        icon: Shield,
        title: "End-to-End Encryption",
        description:
            "Every message is securely encrypted to keep your conversations private."
    },

    {
        icon: MessageCircle,
        title: "Instant Messaging",
        description:
            "Real-time messaging powered by Socket.IO with lightning-fast delivery."
    },

    {
        icon: Users,
        title: "Communities",
        description:
            "Create groups, organize conversations and collaborate effortlessly."
    },

    {
        icon: Phone,
        title: "HD Voice & Video",
        description:
            "Crystal clear audio and video calls built directly into CipherChat."
    },

    {
        icon: Cloud,
        title: "Cloud Sync",
        description:
            "Access your conversations securely from every device you own."
    },

    {
        icon: Smartphone,
        title: "Cross Platform",
        description:
            "Optimized for desktop, tablet and mobile with a responsive interface."
    }

];

const Features = () => {

    return (

        <section className="max-w-7xl mx-auto px-6 py-32">

            <SectionTitle
                title="Everything You Need"
                subtitle="Built from the ground up for privacy, speed and modern communication."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                {features.map((feature) => (

                    <FeatureCard
                        key={feature.title}
                        {...feature}
                    />

                ))}

            </div>

        </section>

    );

};

export default Features;