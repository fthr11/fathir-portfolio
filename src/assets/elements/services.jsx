import SlideScroll from "./animation/slide-scroll"

const Services = () => {
    return (
        <div id="services" className="flex flex-col items-center justify-center text-white pt-20 md:pt-0 px-4 md:min-h-screen">
            <SlideScroll className="text-3xl md:text-4xl font-semibold text-center mb-20" direction="y"  outputRange={[100, 0]}>My Services</SlideScroll>
         
            <div className="flex flex-row flex-wrap justify-center gap-20 md:gap-40">
                <div className="flex flex-col w-[300px] items-center text-center">
                    <SlideScroll className="text-4xl p-6" direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]}>
                        <i className="ri-code-s-slash-line"></i>
                    </SlideScroll>
                    <SlideScroll direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]} className="text-2xl font-semibold mb-6">
                        Web Development
                    </SlideScroll>
                    <SlideScroll className="text-sm md:text-xl " direction="y" inputRange={[0,.7]} outputRange={[100,0]} inputOpacity={[0,.5,.8,1]}>
                        We create fast, responsive, and high-performing websites that bring your vision to life. Our web development ensures your online presence is not just functional, but also impactful and scalable for growth.
                    </SlideScroll>
                </div>

                <div className="flex flex-col w-[300px] items-center text-center">
                    <SlideScroll className="text-4xl p-6" direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]}>
                        <i className="ri-macbook-line"></i>
                    </SlideScroll>
                    <SlideScroll direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]} className="text-2xl font-semibold mb-6">
                        UI/UX Design
                    </SlideScroll>
                    <SlideScroll className="text-sm md:text-xl" direction="y" inputRange={[0, .7]} outputRange={[100,0]} inputOpacity={[0,.5,.8,1]}>
                        Designing smooth, intuitive, and engaging user experiences that keep your audience hooked. Every layout, interaction, and element is crafted to be user-focused and memorable.
                    </SlideScroll>
                </div>

                <div className="flex flex-col w-[300px] items-center text-center">
                    <SlideScroll className="text-4xl p-6" direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]}>
                        <i className="ri-brush-line"></i>
                    </SlideScroll>
                    <SlideScroll direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]} className="text-2xl font-semibold mb-6">
                        Graphics Design
                    </SlideScroll>
                    <SlideScroll className="text-sm md:text-xl" direction="y" inputRange={[0, .7]} outputRange={[100,0]} inputOpacity={[0,.5,.8,1]}>
                        We craft bold and creative visuals that capture attention and tell your brand’s story. From logos to marketing materials, our designs leave a lasting impression and elevate your visual identity.
                    </SlideScroll>
                </div>
            </div>
        </div>
    )
}

export default Services
