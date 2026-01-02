import React from 'react'
import NavBar from '../../NavBar'
import TeamManagementSec from './TeamManagementSec';
import CardSlider from '../designTeams/CardSlider';
import Heading from '../designTeams/Headings';
import Free from '../designTeams/Free';
import Standard from '../designTeams/Standard';
import Premium from '../designTeams/Premium';
import Enterprise from '../designTeams/Enterprise';
import PreFooter from '../designTeams/PreFooter'
import UniversalFooter from '../../UniversalFooter'










const TeamManegment = () => {
  return (
    <>
        <NavBar/>
        <TeamManagementSec/>
        <CardSlider/>
        <Heading/>
        <div className="flex pl-35 pb-20">
        <Free/>
        <Standard/>
        <Premium/>
        <Enterprise/>
        </div>
        <PreFooter/>
        <UniversalFooter className="px-8"></UniversalFooter>
    </>
  )
}

export default TeamManegment
