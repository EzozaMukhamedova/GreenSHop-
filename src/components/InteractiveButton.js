export default function InteractiveButton({ onClick, children }) {
  return (
    <button
      className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
