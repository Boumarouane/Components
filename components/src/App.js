import React from 'react';
import './App.css';
// import PageCard from './components/PageCard/PageCard'
// import PageTexte from './components/PageText/PageText'
// import LineAnimation from './components/Elements/LineAnimation'
// import NavBarLeft from './components/NavBarLeft'
import InputIconsPage from './components/PageIcon/InputIconsPage'
import { IconContext } from "react-icons";

function App() {
  return (
    <>
    <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
      <main>
        {/* <NavBarLeft/> */}
        <InputIconsPage/>
        {/* <PageCard /> */}
        {/* <PageTexte/> */}
        {/* <LineAnimation/> */}
      </main>
    </IconContext.Provider>
    </>
  );
}

export default App;
