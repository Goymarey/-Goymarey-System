import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  ClipboardListIcon, 
  CalendarIcon, 
  BriefcaseIcon, 
  LogOutIcon 
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Goymarey PMS
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img 
            src={user?.avatar || '/default-avatar.png'} 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500">{user?.role || 'Team Member'}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="Dashboard"
          >
            <HomeIcon size={20} />
          </Link>
          <Link 
            to="/projects" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="Projects"
          >
            <ClipboardListIcon size={20} />
          </Link>
          <Link 
            to="/appointments" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="Appointments"
          >
            <CalendarIcon size={20} />
          </Link>
          <Link 
            to="/career" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="Career"
          >
            <BriefcaseIcon size={20} />
          </Link>
          
          <button 
            onClick={logout}
            className="text-gray-600 hover:text-red-600 transition-colors"
            title="Logout"
          >
            <LogOutIcon size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;