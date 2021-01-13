import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Login from './Pages/Login/Login.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
