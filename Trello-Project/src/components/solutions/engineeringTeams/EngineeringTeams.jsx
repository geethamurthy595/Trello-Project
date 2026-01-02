import Section1 from "../../../components/solutions/engineeringTeams/Section1.jsx"
import Header from "../../../components/solutions/engineeringTeams/Header.jsx"
import Section4 from "../../../components/solutions/engineeringTeams/Section4.jsx"
import Section5 from "../../../components/solutions/engineeringTeams/Section5.jsx"
import Section6 from "../../../components/solutions/engineeringTeams/Section6.jsx"
import Article from "../../../components/solutions/engineeringTeams/Article.jsx"
import CardSlider from "../../../components/solutions/engineeringTeams/CardSlider.jsx"
import Pws from "../../../components/solutions/engineeringTeams/Pws.jsx"
import Headings from "../../../components/solutions/engineeringTeams/Headings.jsx"
import Free from "../../../components/solutions/engineeringTeams/Free.jsx"
import Standard from "../../../components/solutions/engineeringTeams/Standard.jsx"
import Premium from "../../../components/solutions/engineeringTeams/Premium.jsx"
import Enterprise from "../../../components/solutions/engineeringTeams/Enterprise.jsx"
import PreFooter from "../../../components/solutions/engineeringTeams/PreFooter.jsx"
import NavBar from "../../NavBar.jsx"
import UniversalFooter from "../../UniversalFooter.jsx"



function EngineeringTeams(){
    return (<>
    <NavBar/>
    <Header/>
    <Section1/>
    <Section4/>
    <Pws/>
    <Section5/>
    <Section6/>
    <Article/>
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
    </>)
}
export default EngineeringTeams