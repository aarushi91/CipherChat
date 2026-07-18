import Preview from "../layout/Preview";
import SectionTitle from "../common/SectionTitle";

const PreviewSection = () => {
    return (

        <section className="max-w-7xl mx-auto px-6 py-32">

            <SectionTitle
                title="Beautiful Interface"
                subtitle="Designed for speed, elegance and effortless communication."
            />

            <div className="mt-20 flex justify-center">

                <Preview />

            </div>

        </section>

    );
};

export default PreviewSection;