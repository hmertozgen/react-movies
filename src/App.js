import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
