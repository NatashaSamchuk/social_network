import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Dialogs from './components/Main/Dialogs/Dialogs';
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
// import Section from "./components/Main/Section/Section";
import Videos from "./components/Main/Videos/Videos";
import Photo from "./components/Photo/Photo";
// import Info from "./components/Main/Info/Info"
import {Routes, Route} from "react-router-dom";
import Friends from "./components/Main/Friends/Friends";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import InfoContainer from "./components/Main/Info/InfoContainer";
import FriendsContainer from "./components/Main/Friends/FriendsContainer";
import Section from "./components/Main/Section/Section";

function App(props) {

  return (
        <div className="wraper">
          <Header/>
          <Photo/>
          <Nav/>
          <div className='container'>
            <Main>
              <InfoContainer/>
              <Routes>
                <Route exact path="/social_network" element = {<Section />}/>
                <Route path="/profile" element = {<Section />}/>
                <Route exact path="/dialogs/*" element = {<DialogsContainer />}/>
                <Route path="/videos" element = {<Videos/>}/>
                {/*<Route path="/fotos" element = {<Fotos/>}/>*/}
                <Route path="/friends" element = {<FriendsContainer/>}/>
              </Routes>
            </Main>
          </div>
          <Footer/>
        </div>
  );
}

export default App;
