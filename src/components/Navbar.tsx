import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Omni</h1>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`md:flex gap-4 ${isOpen ? "block" : "hidden"}`}>
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Features</a></li>
          <li><a href="#" className="hover:text-gray-400">Dashboard</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
