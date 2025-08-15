export const IconInput = ({ icon, maxLength, width, type, label, ...props }) => {
    return (
        <div>
            {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}

            <div className={"flex gap-3 border-3 border-gray-300 rounded-lg p-2 items-center font-medium" + (width ? ` w-${width}` : " w-full")}>
                <span className="icon text-gray-600">{icon}</span>
                <input className="input w-full text-gray-600 placeholder:text-gray-400 outline-none" maxLength={maxLength || "99"} type={type || "text"} {...props} />
            </div>
        </div>
    );
};