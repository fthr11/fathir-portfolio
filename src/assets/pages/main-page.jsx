import About from "../elements/about";
import Top from "../elements/top";
import Navbar from "../elements/navbar";
import Services from "../elements/services";
import Skills from "../elements/skills";
import Projects from "../elements/projects";
import Footer from "../elements/footer";
import "./main.css";

const MainPage = () => {
    return (
      <div className="flex flex-col bg-[#090909] min-h-screen">
        <Navbar />
        <Top />
        <About />
        <Services/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    );
  };
  
  export default MainPage;
