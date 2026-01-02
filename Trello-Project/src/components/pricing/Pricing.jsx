import React from 'react'
import PricingTable from './PricingTable ';
import Best from './Best';
import NavBar from '../NavBar';
import Faq from './faq';
import UniversalFooter from '../UniversalFooter';
import Headings from './Headings';
import Free from './Free';
import Standard from './Standard';
import Premium from './Premium';
import Enterprise from './Enterprise';


const Pricing = () => {
  return (
    <>
      <NavBar />
      <Headings /><br /><br /><br />
      <div className="flex justify-center">
        <Free />
        <Standard />
        <Premium />
        <Enterprise />
      </div>
      <PricingTable />
      <Faq />
      <Best />
      <UniversalFooter />
    </>
  )
}

export default Pricing
