// app/dashboard/page.js or pages/dashboard.js
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="h-full bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="h-screen w-64 bg-[#1e1e2f] text-white shadow-lg px-6 py-8 fixed top-0 left-0">
        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <Image src="/logo.jpg" alt="Logo" width={120} height={120} className="logo-large" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <a href="#" className="sidebar-link text-indigo-400">Dashboard</a>
          <a href="#" className="sidebar-link">Customers</a>
          <a href="#" className="sidebar-link">Loans</a>
          <a href="#" className="sidebar-link">Settings</a>
          <a href="#" className="sidebar-link">Logout</a>
        </nav>
      </aside>

      {/* Main Section */}
      <section className="min-h-screen bg-[#12121c] px-6 py-12 text-white ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Loan Details</h2>
            <a href="#" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600">
              + Add New Loan
            </a>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl bg-[#1e1e2f] shadow-lg">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-[#1a1a28] text-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">#</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Loan Amount (LKR)</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Interest (%)</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Total to Pay Back</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Due Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 text-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Jane Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">100000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">10%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">110,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">10/05/2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">Edit</button>
                    <button className="text-red-400 hover:text-red-300">Delete</button>
                  </td>
                </tr>
                {/* Add more rows dynamically */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
