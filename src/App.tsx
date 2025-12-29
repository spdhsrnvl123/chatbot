import { Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import Course from "./pages/Course";
import Enrollment from "./pages/Enrollment";
import Refund from "./pages/Refund";
import Customer from "./pages/Customer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Chatbot />} />
      <Route path="/course" element={<Course />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default App;
