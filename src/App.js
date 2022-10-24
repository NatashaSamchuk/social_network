import './App.css';
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import InfoContainer from "./components/Main/Info/InfoContainer";
import FriendsContainer from "./components/Main/Friends/FriendsContainer";
import Section from "./components/Main/Section/Section";
import UsersContainer from "./components/Main/Users/UsersContainer";
import PhotoContainer from "./components/Photo/PhotoContainer";
import Videos from "./components/Main/Videos/Videos";
import Photos from "./components/Main/Photos/Photos";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {

  return (
        <div className="wraper">
          {/*<Header/>*/}
            <HeaderContainer/>
          <PhotoContainer/>
          <Nav/>
          <div className='container'>
            <Main>
                {/*<PhotoContainer/>*/}
                {/*<Nav/>*/}
              <InfoContainer/>
              <Routes>
                  <Route exact path="/social_network" element = {<Section />}/>
                  {/*<Route path="/social_network/profile/:userId" element = {<Section />}/>*/}
                  <Route path="/social_network/profile" element = {<Section />}/>
                  <Route exact path="/social_network/dialogs/*" element = {<DialogsContainer />}/>
                  <Route path="/social_network/videos" element = {<Videos/>}/>
                  <Route path="/social_network/photos" element = {<Photos/>}/>
                  <Route path="/social_network/friends" element = {<FriendsContainer/>}/>
                  <Route path='/social_network/users' element={<UsersContainer />}/>
              </Routes>
            </Main>
          </div>
          {/*<Footer/>*/}
        </div>
  );
}

export default App;
