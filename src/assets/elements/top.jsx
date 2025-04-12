import SlideUp from "./animation/slide-up";
import SlideRight from "./animation/slide-right";
import SlideLeft from "./animation/slide-left";
import { motion } from "motion/react"
import SlideDown from "./animation/slide-down";





const Top = ({ }) => {
  return (
    <div
      id="hero"
      className="flex flex-wrap justify-center md:justify-between flex-row bg-gradient-to-r from-[#2E2E2E] to-[#000000] min-h-screen items-center text-white px-6 md:px-60 font-montserrat"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="md:pl-45 pt-30 md:pt-20 flex justify-center"
      >
        <img src="./public/gallery/profile-pic.png" className="w-[300px] md:w-[450px]" />
      </motion.div>

      <div className="pb-30 md:py-0 text-5xl absolute md:text-[100px] font-bold text-left md:pt-55 md:leading-24">
          <div className="flex flex-row gap-4 md:flex-col ">
            <SlideUp>Fathir</SlideUp>
            <SlideUp delay={0.2}>Rahman</SlideUp>
          </div>
        
          <SlideRight className="absolute border-t-4 border-white w-[100px] ml-1 mt-2 md:mt-8 md:ml-2" />
      </div>

      {/* Right Side - Text Content */}
      <div className="pt-10 md:w-1/2 justify-center md:pt-20">
        <div className="text-center md:text-end flex flex-col gap-2 md:gap-10">
          <p className="text-2xl md:text-5xl font-semibold">
            <div className="hidden md:block">
              <SlideLeft duration={1}>Frontend Developer and</SlideLeft>
              <SlideLeft duration={1} delay={0.2}>
                Graphics Designer based in
              </SlideLeft>
              <SlideLeft duration={1} delay={0.4}>
                Jakarta, Indonesia
              </SlideLeft>
            </div> 

            <SlideDown delay={.3} className={"md:hidden tracking-widest text-xl mt-10md:hidden"}>
                Frontend Developer and Graphics Designer
            </SlideDown>
          </p>

          <p className="hidden md:block text-xl md:text-2xl font-normal mt-4">
            <SlideLeft duration={1} delay={0.8}>
              Developing innovative solutions at the
            </SlideLeft>
            <SlideLeft duration={1} delay={1}>
              intersection of creativity and technology.
            </SlideLeft>
          </p>

          <SlideDown duration={2} delay={.4} className="md:hidden mt-4">
            Passionately developing innovative solutions at the dynamic intersection of creativity and technology,  
            where cutting-edge ideas meet practical implementation to shape the future of digital experiences.
          </SlideDown>

          <div className="py-10 pb-20 md:pt-14 md:pb-0">
            <SlideDown>
              <a
                href="#about"
                className="text-2xl font-semibold p-2 border-2 cursor-pointer"
              >
                LEARN MORE
              </a>
            </SlideDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;

  