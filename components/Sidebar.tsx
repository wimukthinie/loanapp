'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Banknote,
  Settings,
  LogOut,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { href: '/dashboard/customers', label: 'Customers', icon: <Users size={18} /> },
  { href: '/dashboard/loans', label: 'Loans', icon: <Banknote size={18} /> },
  { href: '/dashboard/settings', label: 'Settings', icon: <Settings size={18} /> },
  { href: '/', label: 'Logout', icon: <LogOut size={18} /> },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-[#1e1e2f] text-white shadow-2xl px-6 py-8 flex flex-col z-50">
      {/* Logo */}
      <div className="text-center text-3xl font-extrabold mb-12 tracking-wide text-indigo-500">
        🧾 Admin
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 text-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200
                ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-[#2a2a3e] hover:text-white'
                }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-xs text-gray-500 text-center pt-8">
        © {new Date().getFullYear()} Wisdom UI
      </div>
    </aside>
  );
};

export default Sidebar;