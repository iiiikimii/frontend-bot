const renderSelectedSosmed = (label, name, onChange, value) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">{label}</label>
    <select
      name={name}
      className="h-12 px-4 py-2 text-left indent-4 rounded-lg border border-[#2B2B2B] w-full"
      onChange={onChange}
      value={value}
    >
      <option value="">Choose social media...</option>
      <option value="instagram">Instagram</option>
      <option value="tiktok">TikTok</option>
      <option value="facebook">Facebook</option>
    </select>
  </div>
);

export default renderSelectedSosmed;