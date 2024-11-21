import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  ClipboardListIcon, 
  CalendarIcon, 
  BriefcaseIcon, 
  SettingsIcon 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { 
      label: 'Dashboard', 
      icon: <HomeIcon size={20} />, 
      path: '/' 
    },
    { 
      label: 'Projects', 
      icon: <ClipboardListIcon size={20} />, 
      path: '/projects' 
    },
    // { 
    //   label: 'Tasks', 
    //   icon: <TaskIcon size={20} />, 
    //   path: '/tasks' 
    // },
    { 
      label: 'Appointments', 
      icon: <CalendarIcon size={20} />, 
      path: '/appointments' 
    },
    { 
      label: 'Career', 
      icon: <BriefcaseIcon size={20} />, 
      path: '/career' 
    },
    { 
      label: 'Settings', 
      icon: <SettingsIcon size={20} />, 
      path: '/settings' 
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-md h-screen fixed left-0 top-0 pt-16">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`
                  flex items-center p-2 rounded-lg transition-colors duration-200
                  ${isActive(item.path) 
                    ? 'bg-blue-100 text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'}
                `}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;