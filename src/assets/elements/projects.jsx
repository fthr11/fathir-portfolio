import SlideScroll from "./animation/slide-scroll";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import "./project.css"

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


const imagesData = [
    logo1, 
    logo2, 
    logo3,

    design1,
    design2,
    design3,
    design4,
    design21,
    design22,
    design23,

    project1,
    project2,
]

const ScrollProject = () => {
    const container = useRef(null);
    const  {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 1500 * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 1500 * 2.5]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 1500 * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 1500 * 2.2 ]);

    return (
        <div className="hidden md:flex justify-center overflow-hidden w-full mt-20 md:mt-50 min-h-screen">
            <div ref={container} className="flex flex-row gap-3 md:gap-7 box-border">
                <Column images = {[imagesData[0], imagesData[3], imagesData[6]]} y = {y1}/>
                <Column images = {[imagesData[7], imagesData[2], imagesData[8]]} y = {y2}/>
                <Column images = {[imagesData[5], imagesData[10], imagesData[9]]} y = {y3}/>
                <Column images = {[imagesData[9], imagesData[11], imagesData[8]]} y = {y4}/>
            </div>
        </div>
    )
}

const ScrollProjectResponsive = () => {
    const container = useRef(null);
    const  {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 120 * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 120 * 2.5]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 120 * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 120 * 2.5]);
    
    return (
        <div className="md:hidden flex justify-center overflow-hidden w-full mt-20 h-[250px]">
            <div ref={container} className="flex flex-row gap-3 md:gap-7 box-border">
                <Column images = {[imagesData[0], imagesData[3], imagesData[6]]} y = {y1}/>
                <Column images = {[imagesData[7], imagesData[2], imagesData[8]]} y = {y2}/>
                <Column images = {[imagesData[9], imagesData[10], imagesData[11]]} y = {y3}/>
                <Column images = {[imagesData[1], imagesData[2], imagesData[3]]} y = {y4}/>
            </div>
        </div>
    )
}

const Column = ({images, y=0}, ) => {
    return (
        <motion.div id="column" style={{y}} className="flex flex-col gap-1 md:gap-4 relative" >
            {
                images.map((src,index) => (  
                    <div key={index} className="relative min-h-[150px] md:h-[600px] w-[95px] md:w-[350px]">
                        <img className="w-full h-full object-cover rounded-sm md:rounded-lg"
                            src = {src} 
                            alt = "image"
                        />       
                    </div>
                )) 
            }
        </motion.div>
    )
}

const Projects = () => {
    return(
        <main id="projects" className="flex flex-col flex-wrap md:min-h-screen px-10 md:mt-80 md:mb-70 md:px-60 z-10 text-white ">
            <div className="flex flex-col flex-wrap text-white font-bold text-start">
                <SlideScroll className={"text-2xl md:text-6xl "} direction="x" outputRange={[-100,0]}>My Projects</SlideScroll>
                <SlideScroll className={"border border-white w-[100px] md:w-[190px] h-[2px] mt-2 md:mt-5"} outputRange={[-100,0]} delay={1}></SlideScroll>
            </div>

            <ScrollProject/>
            <ScrollProjectResponsive/>
        </main>
    )
}

export default Projects;

