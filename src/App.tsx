import { Routes, Route } from "react-router-dom";
import Chatbot from "./pages/chatbot-page";
import Course from "./pages/course-page";
import Enrollment from "./pages/enrollment-page";
import Refund from "./pages/refund-page";
import Customer from "./pages/customer-page";

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
