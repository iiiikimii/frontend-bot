const renderInput = (label, placeholder) => (
  <div className="flex flex-col gap-2 w-full">

    {/* sebelah sini pikirin gimana kalo misalnya mau upload file */}

    <label className="text-[#2B2B2B] text-base">{label}</label>
    <input
      className="h-12 px-4 py-2 text-left indent-2 rounded-lg border border-[#2B2B2B] w-full"
      placeholder={placeholder}
    />
  </div>
);

export default renderInput;