import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed top-0 flex justify-center items-center bg-panels h-[100px] z-2">
      <nav className="flex fixed gap-[80px] text-[#E0E0E0] font-display">
        <Link to="/" className="text-xl hover:text-[#00FF99]"> Home </Link>
        <Link to="/cheatengine" className="text-xl hover:text-[#00FF99]"> CheatEngine </Link>
        <Link to="/pythontool" className="text-xl hover:text-[#00FF99]"> PythonTool </Link>
        <Link to="/reflections" className="text-xl hover:text-[#00FF99]"> SecurityReflections </Link>
      </nav>
    </div>
  )
}

export default Navbar;