import SlideScroll from "./animation/slide-scroll";

const Skills = () => {
    return(
        <div className="flex flex-col items-center justify-center text-white min-h-[500px]">
            <SlideScroll className={"text-xl md:text-3xl font-bold mb-4"} direction="y" outputRange={[40,0]}>Programming Language</SlideScroll>

            <SlideScroll direction="y" outputRange={[90,0]} className="flex flex-row flex-wrap gap-3 md:gap-10 p-5">
                <img className="h-8 md:h-14" src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
                <img className="h-8 md:h-14" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />
                <img className="h-8 md:h-14 rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                <img className="h-8 md:h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
                <img className="h-6 md:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"/>
                <img className="h-6 md:h-12" src="https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-png-transparent.png" alt="" />
                <img className="h-7 md:h-13" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" />
            </SlideScroll>

            
            <SlideScroll direction="y" outputRange={[30,0]} className="text-xl md:text-3xl font-bold mt-5 md:mt-30">Tools</SlideScroll>

            <SlideScroll direction="y" outputRange={[80,0]} className="flex flex-row flex-wrap gap-3 md:gap-10 p-5">
                <img className="h-8 md:h-14"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" alt="" />
                <img className="h-8 md:h-14"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png" alt="" />
                <img className="h-6 md:h-12"src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png" alt="" />
                <img className="h-6 md:h-12"src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="" />
            </SlideScroll>
        </div>
    )
}

export default Skills;