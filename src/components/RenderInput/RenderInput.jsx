const renderInput = (label, placeholder, name, onChange, value) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#144067] font-bold text-base">{label}</label>
    <input
      name={name}
      className="h-12 px-4 py-2 text-left indent-4 rounded-lg border-3 border-[#e0e6f4] w-full focus:outline-2 outline-offset-3 outline-blue-500"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default renderInput;