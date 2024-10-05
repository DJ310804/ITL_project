import { Link, useLocation } from 'react-router-dom';
import { Home, Folder, FileText, BarChart, User, NotebookIcon, Atom } from 'lucide-react';

const SellerNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="hidden md:flex w-[14%] flex-col justify-between items-center h-screen fixed left-0 bg-white shadow-lg pt-6 pb-3">
      <Link to="/" className="flex space-x-2 items-center">
        <div className="flex flex-col justify-center space-y-[-6px]">
          <div className="flex">
            <span><Atom className='h-6 text-black mr-2' /></span>
            <h1 className="text-xl font-semibold font-pop text-black mb-1 text-center">MarketNest</h1>
          </div>
          {/* <p className="text-xs text-gray-400 tracking-tight font-pop text-center">Seamless City Synergy</p> */}
        </div>
      </Link>

      <div className="flex flex-col items-center space-y-2 w-[100%] mb-20">
        <div className={`w-[85%] text-black py-2 px-4 rounded-lg transition duration-100 ${path === '/vendor/home' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
          <Link to="/" className='flex justify-start items-center'>
            <span><Home className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Dashboard</p>
          </Link>
        </div>

        <div className={`w-[85%] text-black py-2 px-4 rounded-lg transition duration-100 ${path === '/tasks' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
          <Link to="/tasks" className='flex justify-start items-center'>
            <span><NotebookIcon className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Products</p>
          </Link>
        </div>

        <div className={`w-[85%] text-black py-2 px-4 rounded-lg transition duration-100 ${path === '/projects' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
          <Link to="/projects" className='flex justify-start items-center'>
            <span><Folder className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Track Orders</p>
          </Link>
        </div>

        <div className={`w-[85%] text-black py-2 px-4 rounded-lg transition duration-100 ${path === '/resources' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
          <Link to="/resources" className='flex justify-start items-center'>
            <span><FileText className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Marketing</p>
          </Link>
        </div>

        <div className={`w-[85%] text-black py-2 px-4 rounded-lg transition duration-100 ${path === '/reports' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
          <Link to="/reports" className='flex justify-start items-center'>
            <span><BarChart className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Customers</p>
          </Link>
        </div>

        <div className={`w-[85%] text-black py-2 px-4 rounded-lg transition duration-100 ${path === '/payouts' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
          <Link to="/payouts" className='flex justify-start items-center'>
            <span><BarChart className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Payouts</p>
          </Link>
        </div>
      </div>

      <div className={`w-[85%] text-black py-4 px-6 rounded-lg transition duration-100 ${path === '/account' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'}`}>
        <Link to="/account" className='flex justify-start items-center'>
          <span><User className="h-4 w-4 mr-2" /></span>
          <p className="text-sm font-pop">Account</p>
        </Link>
      </div>
    </nav>
  );
};

export default SellerNav;
