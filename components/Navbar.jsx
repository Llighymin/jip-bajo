'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-800">집바조</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#team" className="px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">팀 소개</a>
            <a href="#service" className="px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">서비스</a>
            <a href="#certificate" className="px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">인증서</a>
            <a href="#benefits" className="px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">기대효과</a>
            <button className="ml-4 px-4 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-700 transition-colors">
              문의하기
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">팀 소개</a>
            <a href="#service" className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">서비스</a>
            <a href="#certificate" className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">인증서</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors">기대효과</a>
            <button className="mt-2 w-full px-4 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-700 transition-colors">
              문의하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}