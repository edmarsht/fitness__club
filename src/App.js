import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./component/Navbar";
import SearchExercice from "./component/SearchExercice";
import Footer from "./component/Footer";
import ExerciceDetails from "./page/ExerciceDetails";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Box> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciceDetails />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
