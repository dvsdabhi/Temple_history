import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Header from './components/Header';
import Dwarka from './components/Dwarka';
import Somnath from './components/Somnath';

function App() {
  return (
    <>
      <div className='flex h-screen'>
        <div>
          <Header/>
        </div>
        <div className='w-full py-10 pl-5 flex flex-col flex-1 overflow-hidden'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dwarka' element={<Dwarka/>} />
            <Route path='/somnath' element={<Somnath/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
