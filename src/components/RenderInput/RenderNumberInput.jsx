const renderNumberInput = (label, placeholder, name, onChange, value) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">{label}</label>
    <input
      name={name}
      type="number"
      className="h-12 px-4 py-2 text-left indent-4 rounded-lg border border-[#2B2B2B] w-full"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default renderNumberInput;