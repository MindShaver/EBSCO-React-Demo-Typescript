import React from "react";
import "./App.css";
import BulletinList from "./Components/Bulletin/BulletinList/BulletinList";
import Header from "./Components/Header/Header";
import {bulletinStore} from "./Stores/Bulletin/BulletinStore";
import BulletinCounter from "./Components/Bulletin/BulletinCounter/BulletinCounter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BulletinCounter bulletinStore={bulletinStore} />
      <BulletinList bulletinStore={bulletinStore} />
    </div>
  );
};

export default App;
