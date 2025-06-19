import React from "react";
import { User } from "lucide-react";

const loans = [
  {
    id: 1,
    customer: "Jane Doe",
    amount: 100000,
    interest: 10,
    totalToPayBack: 110000,
    dueDate: "2024-05-10",
    status: "Paid",
  },
  {
    id: 2,
    customer: "John Smith",
    amount: 50000,
    interest: 8,
    totalToPayBack: 54000,
    dueDate: "2024-06-15",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Alice Perera",
    amount: 75000,
    interest: 12,
    totalToPayBack: 84000,
    dueDate: "2024-07-01",
    status: "Overdue",
  },
];

const statusStyles = {
  Paid: "bg-green-600",
  Pending: "bg-yellow-500",
  Overdue: "bg-red-600",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-[#12121c] px-6 py-10 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Loan Details</h2>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-md shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        + Add New Loan
      </button>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl bg-[#1f1f2e] shadow-xl border border-[#2a2a3d]">
          <table className="min-w-full text-sm text-left divide-y divide-gray-700">
            <thead className="bg-[#1a1a28] text-gray-300 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Loan Amount (LKR)</th>
                <th className="px-6 py-4">Interest (%)</th>
                <th className="px-6 py-4">Total Payback</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-100">
              {loans.map((loan, idx) => (
                <tr key={loan.id} className="hover:bg-[#26263c] transition duration-150">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">{loan.customer}</td>
                  <td className="px-6 py-4">{loan.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">{loan.interest}%</td>
                  <td className="px-6 py-4">{loan.totalToPayBack.toLocaleString()}</td>
                  <td className="px-6 py-4">{new Date(loan.dueDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block text-xs font-semibold text-white px-3 py-1 rounded-full ${
                        statusStyles[loan.status] || "bg-gray-600"
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-indigo-400 hover:text-indigo-300 font-medium transition">Edit</button>
                    <button className="text-red-400 hover:text-red-300 font-medium transition">Delete</button>
                  </td>
                </tr>
              ))}
              {loans.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-gray-500">
                    No loans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
