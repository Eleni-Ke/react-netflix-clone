import Jumbotron from "./Components/Jumbotron";
import "./App.css";
import MainSection from "./Components/MainSection";
import NavigationBar from "./Components/NavigationBar";
import PageFooter from "./Components/PageFooter";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Jumbotron />
      <MainSection />
      <PageFooter />
    </div>
  );
}

export default App;
