import React from 'react'
import Taskbar from '../taskbar/Taskbar'
import MyBoardNavBar from './myBoardNavBar'
import { useParams } from 'react-router-dom';
import MyTrelloBoard from '../../myTrelloBoard/MyTrelloBoard';
import LaterList from '../laterList/LaterList';
import TrelloLikeBoard from '../../myTrelloBoard/addlist/Addlist';
import myTrellobg from "../../../assets/myboardbg.svg";
import BottomNavigation from '../bottomNavigaion/BottomNavigation';
import AddListComponent from '../laterList/AddListComponent';

const NewBoard = () => {
    const { boardTitle } = useParams();
  return (
    <div>
        <MyBoardNavBar/>
        <Taskbar title={boardTitle}/>
        
        <div className="relative w-full h-screen overflow-hidden">
            {/* full background */}
            <img
              src={myTrellobg}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            {/* Trello cards: Starter Guide,Today,Thisweek,later,addlist */}
            {/* <LaterList title={"ToDo"}/>
            <LaterList title={"Doing"}/>
            <LaterList title={"ToDo"}/> */}

            <AddListComponent/>

            {/* Navigations inbox,planners,Boards */}
            <BottomNavigation />
          </div>
        
    </div>
  )
}

export default NewBoard