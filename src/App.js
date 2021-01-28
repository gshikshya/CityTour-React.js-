import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <TourList></TourList>
    </div>
  );
}

export default App;
