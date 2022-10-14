import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dialogs from './components/Main/Dialogs/Dialogs';
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Section from "./components/Main/Section/Section";
import Videos from "./components/Main/Videos/Videos";
import Photo from "./components/Photo/Photo";
import Info from "./components/Main/Info/Info"
import {Routes, Route} from "react-router-dom";

function App(props) {
    // console.log(props);
    // console.log(props.stateApp.dispatch);
  return (
      // <BrowserRouter>
        <div className="wraper">
          <Header/>
          <Photo/>
          <Nav/>
          <div className='container'>
            <Main>
              <Info info={props.stateApp._state.infoPage}/>
              <Routes>
                <Route exact path="" element = {<Section/>}/>
                <Route path="/profile" element = {<Section posts={props.stateApp._state.postsPage.posts} store={props.store} dispatch={props.dispatch}/>}/>
                <Route exact path="/dialogs/*" element = {<Dialogs messagesAndDialogs={props.stateApp._state.dialogsPage} dispatchMessage={props.dispatchMessage}/>}/>
                <Route path="/videos" element = {<Videos/>}/>
                {/* <Route path="/fotos" element = {<Fotos/>}/>
              <Route path="/friends" element = {<Friends/>}/> */}
              </Routes>
            </Main>
          </div>
          <Footer/>
        </div>
      // </BrowserRouter>
  );
}

export default App;
