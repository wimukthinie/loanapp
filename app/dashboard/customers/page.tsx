import Link from "next/link";
import { User } from "lucide-react";

const Page = () => {
  const customers = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+94 71 123 4567",
      address: "Colombo, Sri Lanka",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      phone: "+94 76 234 5678",
      address: "Kandy, Sri Lanka",
    },
    {
      id: 3,
      name: "Alice Perera",
      email: "alice@example.com",
      phone: "+94 77 345 6789",
      address: "Galle, Sri Lanka",
    },
  ];

  return (
    <div className="min-h-screen bg-[#12121c] px-8 py-12 text-white ml-64">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Customer List</h2>
          <Link
            href="#"
            className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-neumorphic hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          >
            + Add New Customer
          </Link>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl shadow-neumorphic bg-[#1e1e2f]">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-[#1a1a28] text-gray-300 text-sm select-none">
              <tr>
                <th className="px-6 py-4 font-medium text-left">#</th>
                <th className="px-6 py-4 font-medium text-left">Name</th>
                <th className="px-6 py-4 font-medium text-left">Email</th>
                <th className="px-6 py-4 font-medium text-left">Phone</th>
                <th className="px-6 py-4 font-medium text-left">Address</th>
                <th className="px-6 py-4 font-medium text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-200 text-sm">
              {customers.map((customer, idx) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-800 transition cursor-pointer"
                  role="row"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <Link
                      href={`/dashboard/customers/${customer.id}`}
                      className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      View
                    </Link>
                    <button
                      className="text-red-400 hover:text-red-300 font-medium"
                      aria-label={`Delete customer ${customer.name}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {customers.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500">
                    No customers found.
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
