import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SearchPage from './Pages/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Navbar/>
      </header>
      <body>
        <Routes>
          <Route path="/help" element={<SearchPage />}/>
        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
