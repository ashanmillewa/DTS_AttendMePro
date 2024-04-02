import "./App.css";
// import Nav from "./components/Header/Navv";
import VehicleRegistration from "../src/pages/VehicleRegistration/VehicleRegistration";
import AttendenceLog from "../src/pages/AttendenceLog/attendenceLog";
import Login from "../src/pages/Login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/vehicleRegistration"
          element={<VehicleRegistration />}
        ></Route>
        <Route path="/attendenceLog" element={<AttendenceLog />}></Route>
        <Route path="/*" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
