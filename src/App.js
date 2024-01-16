import './App.css';
import { Routes, Route} from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Home from './Pages/Home';
import Header from './components/Header';
import Dwarka from './components/Dwarka';
import Somnath from './components/Somnath';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebar,setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <>
      <div className='flex h-screen xsm:flex-col sm:flex-col relative'>
        <div className='xsm:hidden sm:hidden'>
          <Header/>
        </div>
        <div className='p-2 md:hidden lg:hidden xl:hidden 2xl:hidden'>
          <AiOutlineMenu onClick={handleSidebar} className="text-2xl" />
        </div>
        <div className='w-full py-10 pl-5 xsm:pl-3 flex flex-col flex-1 overflow-hidden'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dwarka' element={<Dwarka/>} />
            <Route path='/somnath' element={<Somnath/>} />
          </Routes>
        </div>
        {sidebar && (
          <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
        )}
      </div>
    </>
  );
}

export default App;
