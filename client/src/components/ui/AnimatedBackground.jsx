const AnimatedBackground = () => {

    return (

        <>

            <div className="fixed inset-0 -z-20 bg-[#09090B]" />

            <div
                className="
                fixed
                top-[-200px]
                left-[-150px]
                w-[550px]
                h-[550px]
                rounded-full
                bg-purple-700/20
                blur-[160px]
                animate-pulse
                -z-10
                "
            />

            <div
                className="
                fixed
                bottom-[-250px]
                right-[-150px]
                w-[600px]
                h-[600px]
                rounded-full
                bg-cyan-500/10
                blur-[180px]
                animate-pulse
                delay-1000
                -z-10
                "
            />

        </>

    );

};

export default AnimatedBackground;