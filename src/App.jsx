import Home from "./pages.jsx/Home";
import Card from "./pages.jsx/Card";
import Error from "./pages.jsx/Error";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Details from "./pages.jsx/productDetails";
import Thank from "./pages.jsx/Thank";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailes/:id" element={<Details />} />
        <Route path="/card" element={<Card />} />
        <Route path="/order" element={<Thank />} />
        <Route path="/*" element={<Error />} />

        </Routes>
       
        
      </Router>
    </>
  );
}

export default App;
