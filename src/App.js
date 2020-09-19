
import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";
import Music from "./components/Music"
import Draws from "./components/Draws"
import Videos from "./components/Videos"
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";



function App() {

  const [songs, setSongs] = useState("");
  const [list, setList] = useState([]);
  const [ids, setIds] = useState();
  const [ctn, setCtn] =useState(0);
  const[pause,setPause]= useState();

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div className="bodi">

        <Route>
          <Route exact path="/lysuc-web" component={Home} />
          <Route exact path="/music" render={(props) => <Music
            {...props}
            ida={(ids) => setIds(ids)}
            lis={(list) => setList(list)}
            src={(song) => setSongs(song)}
          />} />
          <Route exact path="/draws" render={(props) => <Draws
            {...props}
            cnt={(cnt) => setCtn(cnt)}
            count={ctn} />}
          />
          <Route path="/videos" render={(props) => <Videos {...props} 
          pause={(pause) => setPause(pause)}/>}/> 
        </Route>
      </div>
      <div className="footer">

        <Footer id={ids}
          list={list}
          songs={songs}
          pause={pause} />
      </div>
      <br />
      <br />
      <br />
      <br />



    </React.Fragment>
  )
}



export default App


