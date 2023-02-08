import Jumbotron from "./Components/Jumbotron";
import "./App.css";
import MainSection from "./Components/MainSection";
import NavigationBar from "./Components/NavigationBar";
import PageFooter from "./Components/PageFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Jumbotron />
        <Routes>
          <Route element={<MainSection />} path="/tv-shows" />
        </Routes>
        <PageFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
