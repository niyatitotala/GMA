import "./App.css";
import HeroButton from "./Components/HeroButton";
import WatchAgain from "./Components/WatchAgain";
import Resume_Dark from "./Components/Resume_Dark";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import ContentList from "./Components/ContentList";
import Thumbnail from "./Components/Thumbnail";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="outer flex-row">
          <Nav className="navbar" />
          <div className="flex-column">
            <Header />
            <ContentList className="contentalign" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
