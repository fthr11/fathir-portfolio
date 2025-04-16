import FadeScroll from "./animation/fade-scroll";
import SlideScroll from "./animation/slide-scroll";

const About = () => {

    return (
      <div id="about" className="flex flex-wrap flex-row justify-between px-11 py-20 md:px-60 z-10 md:py-40 text-white font-montserrat">
        <div className="self-center md:flex md:flex-col md:py-0 ">
          <SlideScroll className={"text-4xl md:text-6xl font-bold"} direction="x" outputRange={[-100,0]}>About Me</SlideScroll>
          <SlideScroll className={"border border-white w-[120px] h-[2px] mt-2 md:mt-5 mb-2 md:mb-5"} delay={1} outputRange={[-100,0]}></SlideScroll>
          <FadeScroll><img src="./public/gallery/pic2.png" className="w-full md:w-[450px] max-w-full grayscale mt-10 hover:grayscale-0 ease-in-out duration-300 " /></FadeScroll>
        </div>

        <div className="self-center md:items-start">
          <SlideScroll className="text-xl md:text-3xl font-semibold mt-10 md:pt-20 pb-4 text-center md:text-left" direction="y" inputRange={[0, .4]} outputRange={[-40,0]}>Fathir Rahman Rabbani</SlideScroll>
          <SlideScroll className="text-sm md:text-xl text-justify font-light md:w-[720px]" direction="y" inputRange={[0, .4]} outputRange={[-100,0]} delay={1} outputOpacity={[.4,1.5,1,1]}>Hey there i’am Fathir Rahman rabbani, i’am an undergraduate Computer and Informatics Engineering student in Jakarta State Polytechnic, I am a passionate Frontend Developer, UI/UX Design, and Graphics Design with a strong foundation in Computer and Informatics Engineering. 
          With hands-on experience in building responsive, high-performance web applications, I specialize in creating intuitive user interfaces that enhance user experience and engagement.</SlideScroll>
        </div>
      </div>
    );
  }
  
  export default About;
  