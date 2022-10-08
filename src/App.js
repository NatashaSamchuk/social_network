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
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wraper">
        <Header/>
        <Photo/>
        <Nav/>
        <div className='container'>
          <Main>
            <Info/>
            <Routes>
              <Route exact path="" element = {<Section/>}/>
              <Route path="/profile" element = {<Section/>}/>
              <Route exact path="/dialogs/*" element = {<Dialogs/>}/>
              <Route path="/videos" element = {<Videos/>}/>
              {/* <Route path="/fotos" element = {<Fotos/>}/>
              <Route path="/friends" element = {<Friends/>}/> */}
            </Routes>
          </Main>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
