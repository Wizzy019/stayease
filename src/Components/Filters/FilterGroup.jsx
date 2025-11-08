

function FilterGroup({ title, options }) {

    
  return (
    <div className="">
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <ul className="p-2">
        {options.map((option, index) => (
          <li key={index}>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                // defaultChecked={option.checked}
                className="w-4 h-4 accent-black"
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterGroup