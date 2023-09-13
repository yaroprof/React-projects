// import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { AppProvider } from './context';

function App() {
  return (
    <div className="App">

        <Home />
        <Modal />
        <Sidebar />

    </div>
  );
}

export default App;
