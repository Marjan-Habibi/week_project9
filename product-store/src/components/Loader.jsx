export default function Loader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl shadow animate-pulse"
        >
          <div className="h-32 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}