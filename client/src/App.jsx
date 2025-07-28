import ChatBotPage from "./components/ChatBotPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/chatbot' element={<ChatBotPage />} />
      </Routes>
    </Router>
  );
}

export default App;