import Jumbotron from "./Components/Jumbotron";
import "./App.css";
import MainSection from "./Components/MainSection";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Jumbotron />
      <MainSection />
    </div>
  );
}

export default App;
