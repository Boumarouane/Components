import React from 'react';
import './App.css';
// import PageCard from './components/PageCard/PageCard'
// import PageTexte from './components/PageText/PageText'
// import LineAnimation from './components/Elements/LineAnimation'
import PageIcon from './components/PageIcon/PageIcon'
import { IconContext } from "react-icons";

function App() {
  return (
    <>
    <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
      <PageIcon/>
      {/* <PageCard /> */}
      {/* <PageTexte/> */}
      {/* <LineAnimation/> */}
    </IconContext.Provider>
    </>
  );
}

export default App;
