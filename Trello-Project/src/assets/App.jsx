import Section1 from "./solutions/Section1.jsx"
import Header from "./solutions/Header.jsx"
import Section4 from "./solutions/Section4.jsx"
import Section5 from "./solutions/Section5.jsx"
import Section6 from "./solutions/Section6.jsx"
import Article from "./solutions/Article.jsx"
import CardSlider from "./solutions/CardSlider.jsx"
import Pws from "./solutions/Pws.jsx"
import Headings from "./solutions/Headings.jsx"
import Free from "./solutions/Free.jsx"
import Standard from "./solutions/Standard.jsx"
import Premium from "./solutions/Premium.jsx"
import Enterprise from "./solutions/Enterprise.jsx"
import PreFooter from "./solutions/PreFooter.jsx"


function App(){
  return <>
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
  </>
}
export default App