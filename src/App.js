
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
  const [ids, setIds] = useState()

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
          <Route exact path="/draws" component={Draws} />
          <Route path="/videos" component={Videos} />
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


