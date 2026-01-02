import Section from "../designTeams/Section";
import CardSlider from "../designTeams/CardSlider";
import Headings from "../designTeams/Headings";
import Free from "../designTeams/Free";
import Standard from "../designTeams/Standard";
import Premium from "../designTeams/Premium";
import Enterprise from "../designTeams/Enterprise";
import PreFooter from "../designTeams/PreFooter";
import UniversalFooter from "../../UniversalFooter";
import NavBar from "../../NavBar";


function Design(){
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
export default Design;