const Tooltip = ({ text, children }) => {
  return (
    <span className="relative inline-flex group">
      {children}

      <span
        className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          bg-gray-800/80 text-white
          text-[13px] font-medium
          px-3 py-1.5 rounded-md
          opacity-0 group-hover:opacity-80
          transition-opacity duration-200
          pointer-events-none
          whitespace-nowrap
          backdrop-blur-sm
        "
      >
        {text}
      </span>
    </span>
  );
};

export default Tooltip;
