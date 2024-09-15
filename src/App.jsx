import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import SingleData from "./components/SingleData";

function App() {
 
  return (
    <div className='w-full h-[100vh]'>
      <Router>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/coins/:id" element={<SingleData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
