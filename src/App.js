import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Summery from "./components/Summery/Summery";
import Languages from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Career from "./components/Career/Career";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Progress from "./components/Progress/Progress";
import Theme from "./components/Theme/Theme";


function App() {
  return (
   <>
       <Theme/>
       <Progress/>
       <div className="container">
           <Navigation/>
           <Home/>
           <About/>
           <Summery/>
           <Languages/>
           <Projects/>
           <Career/>
           <Footer/>
       </div>
   </>
  );
}

export default App;
