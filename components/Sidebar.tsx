'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Banknote, Settings, LogOut } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
  { href: "/dashboard/customers", label: "Customers", icon: <Users size={20} /> },
  { href: "/dashboard/loans", label: "Loans", icon: <Banknote size={20} /> },
  { href: "/dashboard/settings", label: "Settings", icon: <Settings size={20} /> },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-80 h-screen fixed top-0 left-0 bg-gradient-to-b from-[#1e1e2f] to-[#15151f] border-r border-[#2a2a3e] px-8 py-10 shadow-2xl z-50 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="text-center mb-10">
        <Image
          src="/logo.jpg"
          alt="Company Logo"
          width={120}
          height={120}
          className="rounded-2xl mx-auto shadow-xl ring-2 ring-indigo-500"
        />
        <h1 className="text-xl font-bold text-indigo-400 mt-4 tracking-wide">Wisdom UI</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3 text-base font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 relative ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-indigo-500/10 hover:backdrop-blur-md hover:text-indigo-300"
              }`}
            >
              {/* Active Indicator */}
              {isActive && <span className="absolute left-0 h-full w-1 bg-white rounded-r-sm" />}
              <span className="transition-transform group-hover:scale-110">{item.icon}</span>
              <span className="tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <hr className="border-t border-[#2f2f40] my-6" />

      {/* Logout */}
      <div className="mb-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 px-5 py-3 text-base font-medium text-gray-300 rounded-xl hover:bg-red-500/10 hover:backdrop-blur-md hover:text-red-400 transition-all duration-300"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 pb-2">
        © {new Date().getFullYear()} Wisdom UI
      </div>
    </aside>
  );
};

export default Sidebar;
