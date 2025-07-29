import ChatBotPage from "./components/ChatBotPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanPage from "./components/PlanPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/chatbot' element={<ChatBotPage/>}/>
        <Route path='/plan' element={<PlanPage />}/>
      </Routes>
    </Router>
  );
}

export default App;