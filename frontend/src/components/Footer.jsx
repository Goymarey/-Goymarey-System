import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md p-4 text-center fixed bottom-0 left-0 right-0">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Goymarey Project Management System. 
          All Rights Reserved.
        </p>
        <div className="mt-2 text-xs text-gray-500">
          <a href="/privacy" className="mr-4 hover:text-blue-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;