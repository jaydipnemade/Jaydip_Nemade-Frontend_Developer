import "./App.css";
import Banner from "./Components/Banner/Banner";
import ShowData from "./Components/Filter/ShowData";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ShowData />
      <Footer />
    </div>
  );
}

export default App;
