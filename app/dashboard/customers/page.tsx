import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Dashboard Customers</h1>
      
      <ul className="mt-10">
        <li><Link href="/dashboard/customers/1">Customer 1</Link></li>
        <li><Link href="/dashboard/customers/1">Customer 2</Link></li>
        <li><Link href="/dashboard/customers/1">Customer 3</Link></li>
        <li><Link href="/dashboard/customers/1">Customer 4</Link></li>
      </ul>
    </div>
  )
}

export default Page