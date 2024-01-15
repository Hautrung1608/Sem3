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
import Recharge from "./pages/Recharge/Recharge";
import Postbill from "./pages/Postbill/Postbill";
import Feedback from "./pages/Feedback/Feedback";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout page={<Home />} />} />
        <Route path="/about" element={<DefaultLayout page={<About />} />} />
        <Route path="/contact" element={<DefaultLayout page={<Contact />} />} />
        <Route path="/online-recharge" element={<DefaultLayout page={<Recharge />} />} />
        <Route path="/post-bill" element={<DefaultLayout page={<Postbill />} />} />
        <Route path="/feedback" element={<DefaultLayout page={<Feedback />} />} />


        <Route path="/signin" element={<DefaultLayout page={<SignIn />} />} />
        <Route path="/signup" element={<DefaultLayout page={<SignUp />} />} />
        
      </Routes>
    </>
  );
}

export default App;
