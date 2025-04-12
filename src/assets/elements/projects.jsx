import SlideScroll from "./animation/slide-scroll";
import FadeScroll from "./animation/fade-scroll";

const ProjectImage = ({ src, title, description, tools, outputRange }) => {
    return (
        <SlideScroll outputRange={outputRange}>
            <div className=" flex justify-center items-center">
                <div className="relative group w-[500px] md:w-[700px] overflow-hidden">

                    {/* Overlay content with blur background */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center backdrop-blur-[2px] bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-10 p-6">
                        <p className="text-2xl font-semibold mb-2">{title}</p>
                        <p className="font-normal text-lg text-center w-full max-w-[400px]">{description}</p>
                        <div className="flex gap-3 mt-4 flex-wrap justify-center">
                            {tools}
                        </div>
                    </div>

                    {/* Image */}
                    <img
                        className="w-full hover:grayscale hover:blur-[2px] hover:opacity-20 transition-all duration-500"
                        src={src}
                        alt="Project"
                    />
                </div>
            </div>
        </SlideScroll>
    );
};



const Projects = () => {
    return(
        <div id="projects" className="flex flex-col flex-wrap min-h-screen px-10 md:py-40 md:px-60 z-10 text-white ">
            <div className="flex flex-col flex-wrap text-white font-bold text-start">
                <SlideScroll className={"text-4xl md:text-6xl "} direction="x" outputRange={[-100,0]}>My Projects</SlideScroll>
                <SlideScroll className={"border border-white w-[120px] h-[2px] mt-5"} outputRange={[-100,0]} delay={1}></SlideScroll>
            </div>

            <SlideScroll className={"flex flex-col  justify-center items-center min-w-full text-xl md:text-2xl my-20"} direction="y" outputRange={[-50,0]} delay={.7}> Website Projects </SlideScroll>

            <div className="flex flex-row justify-between flex-wrap w-full gap-4 md:gap-0">
                <ProjectImage
                    outputRange={[-200,0]}
                    title = {"Clothes."} 
                    description={"it's an e-commerce that provides a lot of modern clothing."}
                    tools={[
                        <i class="ri-reactjs-fill text-blue-500 text-3xl"></i>,
                        <i class="ri-tailwind-css-fill text-blue-400 text-3xl"></i>,
                        <img className="w-6" src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"/>
                    ]}
                    src = {"./public/gallery/Project1.png"}/>
                <ProjectImage 
                    outputRange={[200,0]}
                    title = {"MY EARTH"} 
                    description={"It's a website that provides information about the earth."} 
                    tools={[
                        <i class="ri-html5-fill text-orange-500 text-3xl"></i>,
                        <i class="ri-css3-fill text-blue-400 text-3xl"></i>,
                        <i class="ri-javascript-fill text-yellow-300 text-3xl"></i>,

                    ]}
                    src = {"./public/gallery/Project2.png"}/>
            </div>
            
            <SlideScroll className={"flex flex-col  justify-center items-center min-w-full text-xl md:text-2xl mt-30 mb-20"} direction="y" outputRange={[-60,0]} delay={.7}> Graphics Design Projects </SlideScroll>

            <div className="min-w-full gap-4 md:gap-0">
                <FadeScroll >
                    <div className="flex flex-row w-full">
                        <img className="h-[132px] md:h-[430px]" src="./public/gallery/logo1.png"/>
                        <img className="h-[132px] md:h-[430px]" src="./public/gallery/logo2.png"/>
                        <img className="h-[132px] md:h-[430px]" src="./public/gallery/logo3.png"/>
                        
                    </div>
                    <img src="./public/gallery/design2.png"/>

                    <div className="flex flex-row w-full">
                        <img className="h-[124px] md:h-[415px]" src="./public/gallery/design3.png"/>
                        <img className="h-[124px] md:h-[415px]" src="./public/gallery/design1.png"/>
                        <img className="h-[124px] md:h-[415px]" src="./public/gallery/design4.png"/>  
                    </div>
                    
                    <img src="./public/gallery/design2.1.png" alt="" />

                    <div className="flex flex-row w-full">
                        <img className="h-[144px] md:h-[480px]" src="./public/gallery/design2.2.png"/>
                        <img className="h-[144px] md:h-[480px]" src="./public/gallery/design2.3.png"/>
                    </div>
                </FadeScroll>
            </div>
        </div>

    )
}

export default Projects;