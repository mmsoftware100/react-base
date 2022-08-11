import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Listing from './pages/listing';
import Detail from './pages/detail';
import Layout from './pages/layout';
import NoPage from './pages/no_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="detail" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  /*
    return ( <
        h3 >
        Hello React <
        /h3>
    );
    */
}

export default App;