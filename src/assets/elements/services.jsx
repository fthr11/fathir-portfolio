import SlideScroll from "./animation/slide-scroll"

const ServiceCard = ({item}) =>{
    const {logo, title, description} = item
    return(
    <div className="flex flex-col w-[300px] items-center text-center">
        <SlideScroll className="text-4xl p-6" direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]}>
            {logo}
        </SlideScroll>
        <SlideScroll direction="y" inputRange={[0, .5]} outputRange={[100, 0]} inputOpacity={[0,.5,.8,1]} className="text-2xl font-semibold mb-6">
            {title}
        </SlideScroll>
        <SlideScroll className="text-sm md:text-xl " direction="y" inputRange={[0,.7]} outputRange={[100,0]} inputOpacity={[0,.5,.8,1]}>
            {description}
        </SlideScroll>
    </div>
    )
}

const servicesData = [
    {
        id: 2, 
        logo: <i className="ri-code-s-slash-line"></i>,
        title: "Web Development",
        description : "I build fast, responsive, and high-performing websites that bring your vision to life. Our web development ensures your online presence is not just functional, but also impactful and scalable for growth."
    },
    {
        id: 1,
        logo: <i className="ri-macbook-line"></i>,
        title: "UI/UX Design",
        description : "Designing smooth, intuitive, and engaging user experiences that keep your audience hooked. Every layout, interaction, and element is crafted to be user-focused and memorable."
    },
    {
        id: 3,
        logo: <i className="ri-brush-line"></i>,
        title: "Graphic Design",
        description : "Creating visually stunning graphics that stand out and make a lasting impression. From logos and branding to illustrations and infographics, I bring your vision to life with attention to detail and creativity."
    }
]

const Services = () => {
    return (
        <div id="services" className="flex flex-col items-center justify-center text-white pt-20 md:pt-0 px-4 md:min-h-screen">
            <SlideScroll className="text-3xl md:text-4xl font-semibold text-center mb-20" direction="y"  outputRange={[100, 0]}>My Services</SlideScroll>
         
            <div className="flex flex-row flex-wrap justify-center gap-20 md:gap-40">
                {servicesData.map((item) => (
                        <ServiceCard key={item.id} item={item}/>
                    ) 
                )}
            </div>
        </div>
    )
}

export default Services
