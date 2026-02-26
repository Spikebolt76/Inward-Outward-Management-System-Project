export const Field = ({ label, value, className = "" }) => (
    <div className={`p-5 gap-2 flex flex-col ${className}`}>
        <div className="text-gray-500 text-[12px]">{label}</div>
        <div className="text-[14px]">{value ?? <span className="text-gray-300">—</span>}</div>
    </div>
);

export const MonoField = ({ label, value, className = "" }) => (
    <div className={`p-5 gap-2 flex flex-col ${className}`}>
        <div className="text-gray-500 text-[12px]">{label}</div>
        <div className="font-mono text-[14px]">{value ?? <span className="text-gray-300">—</span>}</div>
    </div>
);