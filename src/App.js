import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';
import  {originalsUrl,horrorUrl, actionUrl, ComedyUrl} from "./constants/Url"

function App() {
  return (
    <div className="App">
      <NavBar/>        
      <Banner/>
      <Rowpost title="NetFlix Originals" url={originalsUrl}/>
      <Rowpost title="Action" small  url={actionUrl}/>
      <Rowpost title="Horror" small  url={horrorUrl}/>
      <Rowpost title="Comedy" small  url={ComedyUrl}/>
    </div>
  );
}

export default App;
