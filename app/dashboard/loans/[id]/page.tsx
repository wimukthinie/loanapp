interface PageProps {
  params: {
    id: string;
  };
}

export default function CustomerPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Customer Profile</h1>
      <p className="text-lg">
        Viewing details for customer ID:{" "}
        <span className="font-mono text-indigo-400">{id}</span>
      </p>
    </div>
  );
}
