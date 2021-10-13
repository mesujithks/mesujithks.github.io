import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import EmailAddOn from "./components/EmailAddOn";
import SocialAddOn from "./components/SocialAddOn";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Loader></Loader>
      <Navbar></Navbar>
      <EmailAddOn></EmailAddOn>
      <SocialAddOn></SocialAddOn>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
