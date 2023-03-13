import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import DeliveryNote from './components/DeliveryNote';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Intro/>
      <DeliveryNote/>
    </div>
  );
}

export default App;
