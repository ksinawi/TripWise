import ChatBotPage from "./components/ChatBotPage";
import ScrollToElement from "./components/ScrollToElement";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import PlanPage from "./components/PlanPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToElement/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/chatbot' element={<ChatBotPage/>}/>
        <Route path='/plan' element={<PlanPage />}/>
      </Routes>
    </Router>
  );
}

export default App;