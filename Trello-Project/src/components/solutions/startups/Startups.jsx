import Section from "../startups/Section";
import CardSlider from "../startups/CardSlider";
import Headings from "../startups/Headings";
import Free from "../startups/Free";
import Standard from "../startups/Standard";
import Premium from "../startups/Premium";
import Enterprise from "../startups/Enterprise";
import PreFooter from "../startups/PreFooter";
import UniversalFooter from "../../UniversalFooter";
import NavBar from "../../NavBar";


function Startups(){
  return <div>
    <NavBar/>
    <Section/>
    <CardSlider/>
    <Headings/>
    <div className="flex pl-35 pb-20">
    <Free/>
    <Standard/>
    <Premium/>
    <Enterprise/>
    </div>
    <PreFooter/>
    <UniversalFooter/>
  </div>;
}
export default Startups;