import { Bell } from 'lucide-react';
import logo from "../assets/logo/welkin.png"
export function Header() {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center gap-8">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
        <nav className="flex gap-6">
          {["Welkin Search",].map(
            (item) => (
              <button key={item} className="text-gray-600 hover:text-gray-900">
                {item}
              </button>
            )
          )}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Bhanupratap Singh</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div> */}
        <Bell size={20} className="text-gray-500" />
      </div>
    </header>
  );
}