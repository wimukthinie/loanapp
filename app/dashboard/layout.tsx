import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#12121c] text-white font-sans">
        <div className="flex min-h-screen">
          {/* Sidebar - fixed width w-80 */}
          <Sidebar />
          
          {/* Main Content shifted by ml-80 to avoid overlap */}
          <div className="flex-1 flex flex-col ml-80">
            <Navbar />
            <main className="flex-1 p-6">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
