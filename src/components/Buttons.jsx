export default function Buttons({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-basse rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
