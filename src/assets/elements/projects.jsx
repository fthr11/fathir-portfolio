import SlideScroll from "./animation/slide-scroll";
import FadeScroll from "./animation/fade-scroll";
// image import
import logo1 from "/gallery/logo1.png";
import logo2 from "/gallery/logo2.png";
import logo3 from "/gallery/logo3.png";

import design1 from "/gallery/design1.png";
import design2 from "/gallery/design2.png";
import design3 from "/gallery/design3.png";
import design4 from "/gallery/design4.png"
import design21 from "/gallery/design2.1.png";
import design22 from "/gallery/design2.2.png";
import design23 from "/gallery/design2.3.png";

import project1 from "/gallery/Project1.png";
import project2 from "/gallery/Project2.png";


const ProjectImage = ({ src, title, description, tools, outputRange, className }) => {
    return (
        <SlideScroll outputRange={outputRange}>
            <div className= {`flex justify-center items-center ${className}`}>
                <div className="relative group w-[400px] md:w-[700px] overflow-hidden">

                    {/* Overlay content with blur background */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center backdrop-blur-[2px] bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-10 p-6">
                        <p className="text-2xl font-semibold mb-2">{title}</p>
                        <p className="font-normal text-lg text-center w-full max-w-[400px]">{description}</p>
                        <div className="flex gap-3 mt-4 flex-wrap justify-center">
                        {tools.map((tool, index) => (
                            <span key={index}>{tool}</span>
                        ))}
                        </div>
                    </div>

                    {/* Image */}
                    <img
                        className={`w-full hover:grayscale hover:blur-[2px] hover:opacity-20 transition-all duration-500 ${className}`}
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
                <SlideScroll className={"text-2xl md:text-6xl "} direction="x" outputRange={[-100,0]}>My Projects</SlideScroll>
                <SlideScroll className={"border border-white w-[100px] md:w-[190px] h-[2px] mt-2 md:mt-5"} outputRange={[-100,0]} delay={1}></SlideScroll>
            </div>

            <SlideScroll className={"flex flex-col justify-center items-center min-w-full text-sm md:text-2xl mt-10 mb-10 md:mt-30 md:mb-20"} direction="y" outputRange={[50,0]} delay={.7}> Website Projects </SlideScroll>

            <div className="flex md:flex-row flex-col justify-between w-full gap-6 md:gap-0">
                <ProjectImage
                    outputRange={[-100,0]}
                    title = {"Clothes."} 
                    description={"it's an e-commerce that provides a lot of modern clothing."}
                    tools={[
                        <i className="ri-reactjs-fill text-blue-500 text-3xl"></i>,
                        <i className="ri-tailwind-css-fill text-blue-400 text-3xl"></i>,
                        <img className="w-6" src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"/>
                    ]}
                    src = {project1}/>
                <ProjectImage 
                    outputRange={[100,0]}
                    title = {"MY EARTH"} 
                    description={"It's a website that provides information about the earth."} 
                    className={`self-end`}
                    tools={[
                        <i className="ri-html5-fill text-orange-500 text-3xl"></i>,
                        <i className="ri-css3-fill text-blue-400 text-3xl"></i>,
                        <i className="ri-javascript-fill text-yellow-300 text-3xl"></i>,

                    ]}
                    src = {project2}/>
            </div>
            
            <SlideScroll className={"flex flex-col justify-center items-center min-w-full text-sm md:text-2xl mt-20 md:mt-30 mb-10 md:mb-20"} direction="y" outputRange={[60,0]}> Graphics Design Projects </SlideScroll>

            <div className="min-w-full gap-4 md:gap-0">
                <FadeScroll >
                    <div className="flex flex-row w-full">
                        <img className="h-[121px] md:h-[430px]" src={logo1}/>
                        <img className="h-[121px] md:h-[430px]" src={logo2}/>
                        <img className="h-[121px] md:h-[430px]" src={logo3}/>
                    </div>
                    <img src={design2}/>

                    <div className="flex flex-row w-full">
                        <img className="h-[121px] md:h-[415px]" src={design3}/>
                        <img className="h-[121px] md:h-[415px]" src={design1}/>
                        <img className="h-[121px] md:h-[415px]" src={design4}/>  
                    </div>
                    
                    <img src={design21}/>

                    <div className="flex flex-row w-full">
                        <img className="h-[140px] md:h-[480px]" src={design22}/>
                        <img className="h-[140px] md:h-[480px]" src={design23}/>
                    </div>
                </FadeScroll>
            </div>
        </div>

    )
}

export default Projects;