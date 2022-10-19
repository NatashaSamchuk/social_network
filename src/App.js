import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
// import Photo from "./components/Photo/Photo";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import InfoContainer from "./components/Main/Info/InfoContainer";
import FriendsContainer from "./components/Main/Friends/FriendsContainer";
import Section from "./components/Main/Section/Section";
import UsersContainer from "./components/Main/Users/UsersContainer";
import PhotoContainer from "./components/Photo/PhotoContainer";

function App(props) {

  return (
        <div className="wraper">
          <Header/>
          <PhotoContainer/>
          <Nav/>
          <div className='container'>
            <Main>
              <InfoContainer/>
              <Routes>
                  <Route exact path="/social_network" element = {<Section />}/>
                  <Route path="/profile" element = {<Section />}/>
                  <Route exact path="/dialogs/*" element = {<DialogsContainer />}/>
                {/*<Route path="/videos" element = {<Videos/>}/>*/}
                {/*<Route path="/photos" element = {<Fotos/>}/>*/}
                  <Route path="/friends" element = {<FriendsContainer/>}/>
                  <Route path='/users' element={<UsersContainer />}/>
              </Routes>
            </Main>
          </div>
          <Footer/>
        </div>
  );
}

export default App;
