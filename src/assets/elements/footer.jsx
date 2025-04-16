import SlideScroll from "./animation/slide-scroll";

const Footer = () => {
  return(
    <div className="flex flex-col justify-center pt-50 md:pt-100 md:px-60 font-montserrat text-white ">
        <SlideScroll className={"flex min-w-full justify-center text-2xl md:text-7xl font-bold "} direction="y" outputRange={[-50,0]} outputOpacity={[0,.5,1,1]}>Let’s Work Together</SlideScroll>

        <div className="flex flex-row justify-between w-full px-5 mt-40 md:mt-70 md:pt-180 mb-10 md:mb-15">
            <div id="contact"  className="flex flex-col items-start">
                <p className="text-sm md:text-xl ">Contact</p>
                <p className="text-xs md:text-base mt-1">+62 877-7025-7535</p>
                <p className="text-sm md:text-xl mt-10 ">Email</p>
                <p className="text-xs md:text-base mt-1">fathirrabbani20030@example.com</p>
            </div>

            <div className="flex flex-col text-end">
                <p className="text-sm md:text-xl">Follow me</p>
                <a href="https://www.instagram.com/fthr11._" className="text-xs md:text-base mt-10 hover:underline">Instagram</a>
                <a href="https://www.linkedin.com/in/fathir-rahman-305137325/" className="text-xs md:text-base mt-2 hover:underline">LinkedIn</a>
                <a href="https://github.com/fthr11" className="text-xs md:text-base mt-2 hover:underline">GitHub</a>
                <p className="text-[10px] font-light mt-10">@2025 Fathir Rahman Rabbani</p>
            </div>
        </div>
    </div>

    
  )
}

export default Footer;