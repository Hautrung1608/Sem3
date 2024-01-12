import {
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import DefaultLayout from "./components/home/DefaultLayout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout page={<Home />} />} />
        <Route path="/about" element={<DefaultLayout page={<About />} />} />
        <Route path="/signin" element={<DefaultLayout page={<SignIn />} />} />
        <Route path="/signup" element={<DefaultLayout page={<SignUp />} />} />
        
      </Routes>
    </>
  );
}

export default App;
