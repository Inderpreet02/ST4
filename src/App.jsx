import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Reviews from "./components/Reviews";

const App = () => {

  const [data, setData] = useState([])
  var data1 = [];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form data={data} setData={setData} data1={data1}/>} />
        <Route path="/reviews" element={<Reviews data={data} data1={data1}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
