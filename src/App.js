
import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";
import Music from "./components/Music"
import Draws from "./components/Draws"
import Videos from "./components/Videos"
import Home from "./components/Home";
import Player from "./components/VideoPlayer"
import { Switch, Route } from "react-router-dom";
import DrawViwer from "./components/DrawViwer"


function App() {
  // const [datas, getDatas] = useState()
  // const [data, setData] = useState([]);
  const [songs, setSongs] = useState("");
  const [list, setList] = useState([]);
  const [ids, setIds] = useState()
  // console.log(ids)
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div className="bodi">

        <Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/music" render={(props) => <Music 
            {...props}
            ida={(ids) => setIds(ids)}
            lis={(list) => setList(list)}
            src={(song) => setSongs(song)}
             />} />
          <Route exact path="/draws" component={Draws} />
          <Route path="/videos" component={Videos} />
          {/* <Route path="/player:id" component={Player}/> */}
          {/* <Route path="/drawViwer/:id/:original" component={DrawViwer}/> */}
        </Route>
      </div>
      <div className="footer">

        <Footer id={ids}
          list={list}
          songs={songs} />
      </div>


    </React.Fragment>
  )
}



export default App


