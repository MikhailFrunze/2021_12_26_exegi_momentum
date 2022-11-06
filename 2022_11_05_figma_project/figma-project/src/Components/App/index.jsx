import Header from "../Header";
import Project from "../Project";
import Request from "../Request";
import Footer from "../Footer";
import {Context} from '../../context'

function App() {
  return (
    <div className="App">
      <Context.Provider>
      <Header/>
      <Project/>
      <Request/>
      <Footer/>
      </Context.Provider>
    </div>
  );
}

export default App;
