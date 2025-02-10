const renderSelectedPostType = (label, name, onChange) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">{label}</label>
    <select
      name={name}
      className="h-12 px-4 py-2 text-left rounded-lg border border-[#2B2B2B] w-full"
      onChange={onChange}
    >
      <option value="post">Post</option>
      <option value="reels">Reels</option>
      <option value="video">Video</option>
    </select>
  </div>
);

export default renderSelectedPostType;