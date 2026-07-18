import SectionTitle from "../common/SectionTitle";
import StatCard from "../common/StatCard";

const stats = [
    {
        number: 50000,
        suffix: "+",
        label: "Messages Sent"
    },
    {
        number: 99.9,
        suffix: "%",
        label: "Uptime"
    },
    {
        number: 128,
        suffix: "+",
        label: "Countries"
    },
    {
        number: 24,
        suffix: "/7",
        label: "Availability"
    }
];

const StatsSection = () => {

    return (

        <section className="max-w-7xl mx-auto px-6 py-32">

            <SectionTitle
                title="Built for Scale"
                subtitle="Reliable, fast and designed for millions of conversations."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                {stats.map((item) => (

                    <StatCard
                        key={item.label}
                        number={item.number}
                        suffix={item.suffix}
                        label={item.label}
                    />

                ))}

            </div>

        </section>

    );

};

export default StatsSection;