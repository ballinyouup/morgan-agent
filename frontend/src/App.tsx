import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagesURL from "./router/routes";
import { Landing, ChatBot } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PagesURL.landing} element={<Landing />} />
        <Route path={PagesURL.chatbot} element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;